/*function hello() {
    alert("hello moto");

}
function color(params) {
  document.getElementById("box").style.backgroundColor = "red";

}

*/
   var box= document.getElementById("box");
    box.addEventListener("click",listener)
    function listener() {
        box.style.backgroundColor = "yellow"; 
    }

