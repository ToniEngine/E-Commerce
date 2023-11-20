// function setNewDiv(){
//    const leftEl = document.getElementById("left");
//    const middleEl   = document.getElementById("middle");

//    middleEl.style.display= "block";
//    leftEl.innerHTML=middleEl.innerHTML
// }


// function setOldDiv(){
//     const leftEl = document.getElementById("left");
//     leftEl.style.display="block"
// }

// function setNewDiv() {
//     const leftEl = document.getElementById("left");
//     const middleEl = document.getElementById("middle");
 
//     leftEl.addEventListener("mouseenter", function() {
//        middleEl.style.display = "block";
//        leftEl.innerHTML = middleEl.innerHTML;
//     });
 
//     leftEl.addEventListener("mouseleave", function() {
//        middleEl.style.display = "none";
//     });
//  }
 

function setNewDiv() {
    const leftEl = document.getElementById("left");
    const middleEl = document.getElementById("middle");
 
    middleEl.style.visibility = "visible";
    // leftEl.innerHTML = middleEl.innerHTML;
 }
 
 function setOldDiv() {
    const middleEl = document.getElementById("middle");
    middleEl.style.visibility = "hidden";
 }
 