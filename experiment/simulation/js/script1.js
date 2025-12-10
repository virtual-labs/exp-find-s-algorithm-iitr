
const myContainer = document.getElementById('box');
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});




// table
let index = 1;
let count = 0;

function addDataToTable() {
  // dataval();

  const dataPointsTable = document.getElementById("dataSetTable");
  const tbody = dataPointsTable.getElementsByTagName("tbody")[0];

  let citationsa = (document.getElementById("citationsa"));
  let sizea = (document.getElementById("sizea"));
  let librarya = (document.getElementById("librarya"));
  let pricea = (document.getElementById("pricea"));
  let editionsa = (document.getElementById("editionsa"));
  let buya = (document.getElementById("buya"));
  
  
if ( citationsa.value!='NULL'&&sizea.value!='NULL'&& librarya.value!='NULL' && pricea.value!='NULL' && editionsa.value!='NULL' && buya.value!='NULL'){
  const row = document.createElement("tr");
  row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    console.log(rl)
    console.log(rl.length)
    let count_rows=0
    des=true;
    for (var j = 0; j < rl.length; j++) {
     if(rl[j].cells[1].innerHTML==citationsa.value && rl[j].cells[2].innerHTML==sizea.value && rl[j].cells[3].innerHTML==librarya.value && rl[j].cells[4].innerHTML==pricea.value && rl[j].cells[5].innerHTML==editionsa.value && rl[j].cells[6].innerHTML==buya.value){
      count_rows=count_rows+1
      
      if(count_rows==3){
        alerts('error','Duplicate Values',"The given value is already entered 3 times, enter a unique value.");
        
        des=false;
        break;
      }

     }
     }


     if(des==true){
      d= document.getElementById('reset');
      if(d.disabled)
      {
        d.disabled=false;
      }
      row.innerHTML = `
      <td>${index}</td>
      <td>${citationsa.value}</td>
      <td>${sizea.value}</td>
      <td>${librarya.value}</td>
      <td>${pricea.value}</td>
      <td>${editionsa.value}</td>
      <td>${buya.value}</td>
      <td><input type="button" class="delete-button" value="Delete" onClick="deleteRow(this)"></td>

    `;


  tbody.appendChild(row);
  index++;
  count++;
  citationsa.value='NULL'
  sizea.value='NULL'
  librarya.value='NULL'
  pricea.value='NULL'
  editionsa.value='NULL'
  buya.value='NULL'

citationsa.style.border=""
sizea.style.border=""
librarya.style.border=""
pricea.style.border=""
editionsa.style.border=""
buya.style.border=""
     }
}
else
  {
    let countfof=0
    let a=""
    if(citationsa.value=='NULL'){
      //a=a+"COLOR "
      countfof=countfof+1
      citationsa.style.border="2px solid red"
    }
    else{
      citationsa.style.border=""
    }
    if(sizea.value=='NULL'){
      //a=a+"TOUGHNESS "
      countfof=countfof+1
      sizea.style.border="2px solid red"
    }
    else{
      sizea.style.border=""
    }
    if(librarya.value=='NULL'){
     // a=a+"FUNGUS "
      countfof=countfof+1
      librarya.style.border="2px solid red"
    }
    else{
      librarya.style.border=""
    }
    if(pricea.value=='NULL'){
      //a=a+"APPEARANCE "
      countfof=countfof+1
      pricea.style.border="2px solid red"
    }
    else{
      pricea.style.border=""
    }

    if(editionsa.value=='NULL'){
     // a=a+"POISONOUS "
      countfof=countfof+1
      editionsa.style.border="2px solid red"
    }
    else{
      editionsa.style.border=""
    }

    if(buya.value=='NULL'){
        // a=a+"POISONOUS "
         countfof=countfof+1
         buya.style.border="2px solid red"
       }
       else{
         buya.style.border=""
       }

    if(countfof>0){
      g='MISSING VALUE!!'
        a=`Select the value for highlighted cell.`
    }
   
    alerts('error',g,a);
 

  }
  if (count === 8) {
  data=document.getElementById('dataSetTable');
    let count_lastcolumn=0;
    for(var j = 1; j < 9; j++)
    {
      var rows=data.rows.item(j).cells;
      console.log(rows.item(6).innerHTML);

     if(rows.item(6).innerHTML==='No')
     {
      count_lastcolumn=count_lastcolumn+1
      console.log(count_lastcolumn)
     }
     

     if(count_lastcolumn===8){
      alerts('warning','DATASET contains only negative examples',"Remember, the Find-S algorithm deals with positive instances. Test by deleting entries and adding some positive examples.");
      
      
return;
     }
    }

    f=document.getElementById("add-button")
    f.style.cursor="not-allowed";
    f.disabled = true;
  
    Swal.fire({
        showCancelButton: true,
      title: "Do you want to delete any row?",
      icon: "warning",
      allowOutsideClick: false,
      cancelButtonText: "NO",
      cancelButtonColor : "red",
      confirmButtonText: "YES",
      target: '.container',
      customClass: {                      // <------ customClass is an object!
        container: 'position-absolute'
      }, 
      
    }).then((result) => {
      if (result.isConfirmed) {
        const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer";
          ne.onclick=function(){tocheckthenextfunc()}
        
        ;}  
        else{
            f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
            for(let i =7;i>=0;i--){
                const del=document.getElementsByClassName("delete-button")
              del[i].disabled=true;
              del[i].style.opacity=0.5
              del[i].style.cursor="not-allowed";
            }
            
       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          
         

          Swal.fire({
            icon: 'success',
            title:'DATASET created!!!',
            html: `Click on the <b style="color:#FF6600">NEXT</b> button.`,
            showCancelBotton:true,
            allowOutsideClick: false,
            target: '.container',
            customClass: {                      // <------ customClass is an object!
              container: 'position-absolute'
            },     
  
      
    });

    var next = document.getElementById("NEXT")
    next.disabled=false;
    next.style.cursor="pointer";
        }
      
    });
  
  }
}

function deleteRow(button) {
  // Traverse up the DOM to find the table row (tr) element
  var row = button.parentNode.parentNode;

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Update the serial numbers
  updateSerialNumbers();
  f=document.getElementById("add-button")
    f.style.cursor="pointer";
    f.disabled = false;
    const ne = document.getElementById("NEXT")
    ne.disabled=true;
    ne.style.cursor="not-allowed"
}

function updateSerialNumbers() {
  index--;
  count--;
  var table = document.getElementById('dataSetTable');
  var rows = table.getElementsByTagName('tr');

  // Start the serial number from 1
  var serialNumber = 1;

  // Loop through each row (skip the header row)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];

    // Update the serial number cell
    var sNoCell = row.cells[0];
    sNoCell.textContent = serialNumber;

    // Increment the serial number for the next row
    serialNumber++;
  }
}




function thenextbutton(){
  var tableData = [];
  const tbody = document.getElementById("for11");

  location.href = "compute-2.html";

  for (var i = 0; i < tbody.rows.length; i++) {
    var rowData = [];
    var cells = tbody.rows[i].cells;
  
    // Iterate through each cell of the row
    for (var j = 0; j < cells.length-1; j++) {
     // var columnName = tbody.rows[0].cells[j].textContent; 
      var cellValue = cells[j].textContent;
  
      rowData[j] = cellValue;
    }
  
    tableData.push(rowData);
  }
  
  var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
  
  localStorage.setItem('objectToPass', serializedData1); 

}



function alerts(icon,title,text)
{
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    allowOutsideClick: false,
    target: '.container',
    customClass: {                      // <------ customClass is an object!
      container: 'position-absolute',
  
    },     
  });
}




function tocheckthenextfunc(){
  rl=document.getElementsByClassName("tocheck");
  if(rl.length==8){
    thenextbutton()
  }
  
  }


