
function setNewDiv() {
    const leftEl = document.getElementById("left");
    const middleEl = document.getElementById("middle");
 
    middleEl.style.visibility = "visible";
    // middleEl.style.transition= "all 3s ease"
    // leftEl.innerHTML = middleEl.innerHTML;
 }
 
 function setOldDiv() {
    const middleEl = document.getElementById("middle");
    middleEl.style.visibility = "hidden";
 }
 