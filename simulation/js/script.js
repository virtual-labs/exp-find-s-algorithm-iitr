
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

  let colora = (document.getElementById("colora"));
  let tougha = (document.getElementById("tougha"));
  let fungusa = (document.getElementById("fungusa"));
  let appeara = (document.getElementById("appeara"));
  let poisona = (document.getElementById("poisona"));

  
  
if ( colora.value!='NULL'&&tougha.value!='NULL'&& fungusa.value!='NULL' && appeara.value!='NULL' && poisona.value!='NULL'){
  const row = document.createElement("tr");
  row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    console.log(rl)
    console.log(rl.length)
    let count_rows=0
    des=true;
    for (var j = 0; j < rl.length; j++) {
     if(rl[j].cells[1].innerHTML==colora.value && rl[j].cells[2].innerHTML==tougha.value && rl[j].cells[3].innerHTML==fungusa.value && rl[j].cells[4].innerHTML==appeara.value && rl[j].cells[5].innerHTML==poisona.value){
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
      <td>${colora.value}</td>
      <td>${tougha.value}</td>
      <td>${fungusa.value}</td>
      <td>${appeara.value}</td>
      <td>${poisona.value}</td>
      <td><input type="button" class="delete-button" value="Delete" onClick="deleteRow(this)"></td>

    `;


  tbody.appendChild(row);
  index++;
  count++;
  colora.value='NULL'
  tougha.value='NULL'
  fungusa.value='NULL'
  appeara.value='NULL'
  poisona.value='NULL'

colora.style.border=""
tougha.style.border=""
fungusa.style.border=""
appeara.style.border=""
poisona.style.border=""

     }
}
else
  {
    let countfof=0
    let a=""
    if(colora.value=='NULL'){
      //a=a+"COLOR "
      countfof=countfof+1
      colora.style.border="2px solid red"
    }
    else{
      colora.style.border=""
    }
    if(tougha.value=='NULL'){
      //a=a+"TOUGHNESS "
      countfof=countfof+1
      tougha.style.border="2px solid red"
    }
    else{
      tougha.style.border=""
    }
    if(fungusa.value=='NULL'){
     // a=a+"FUNGUS "
      countfof=countfof+1
      fungusa.style.border="2px solid red"
    }
    else{
      fungusa.style.border=""
    }
    if(appeara.value=='NULL'){
      //a=a+"APPEARANCE "
      countfof=countfof+1
      appeara.style.border="2px solid red"
    }
    else{
      appeara.style.border=""
    }

    if(poisona.value=='NULL'){
     // a=a+"POISONOUS "
      countfof=countfof+1
      poisona.style.border="2px solid red"
    }
    else{
      poisona.style.border=""
    }

    if(countfof>0){
      g='MISSING VALUE'
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
      console.log(rows.item(5).innerHTML);

     if(rows.item(5).innerHTML==='No')
     {
      count_lastcolumn=count_lastcolumn+1
      console.log(count_lastcolumn)
     }
     

     if(count_lastcolumn===8){
      f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
      alerts('warning','DATASET contains only negative examples',"Remember, the Find-S algorithm deals only with positive instances. Test by deleting entries and adding some positive examples.");
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

  location.href = "compute.html";

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


