### **Introduction**

The Find-S algorithm, developed by Tom Mitchell, is a pivotal machine learning algorithm for supervised concept learning and hypothesis space exploration. The algorithm is designed to find a maximally specific hypothesis that fits all the positive examples, while ignoring negative examples during the learning process. The algorithm's ultimate goal is to discover a hypothesis that accurately represents the target concept by progressively expanding the hypothesis space until it covers all positive instances.

### **Notation used in Find-S Algorithm**
1. 'ϕ' indicates that no value is acceptable for the attributes.
2. '?' indicates that any value can be acceptable for the attributes.
3. The most specific hypothesis is represented by {ϕ, ϕ, ϕ, ϕ} where number of the 'ϕ' is equal to number of attributes in training data set.
4. The most general hypothesis is represented by {?, ?, ?, ?} where number of the '?' is equal to number of attributes in training data set.

#### **Algorithm**

Input: Set of positive training examples D<br>
Output: Hypothesis h

Step 1: Initialize h to the most specific hypothesis in the hypothesis space.<br>
Step 2: For each positive training example x in D:<br>
    for each attribute’s constraint ai in h:<br>
    if the constraint a<sub>i</sub> is satisfied by x<br>
     then do nothing<br>
    else<br>
     replace a<sub>i</sub> in h by the next general hypotheses Constraint ‘?’ that is satisfied by x.<br>
Step 3: Return the hypothesis h.



<center>  
<img style="mix-blend-mode: darken;" src="images\flowchart.png" alt="Working of Find-S Algorithm">
<figcaption><strong>Fig. 1 Working of Find-S Algorithm</strong></figcaption>
</center>

</br>

### **Limitations of Find-S Algorithm**
* There is no way to determine if the hypothesis is consistent throughout the data.
* Inconsistent training sets can actually mislead the Find-S algorithm, since it ignores the negative examples.
* Find-S algorithm does not provide a backtracking technique to determine the best possible changes that could be done to improve the resulting hypothesis.
* For larger datasets or higher-dimensional spaces, the algorithm's efficiency can decrease as it needs to iterate through each attribute for each positive example.
