var greeting ="hello";


var name = "class!";

document.getElementById

function zoom(image){
    image.classList.toggle("zoom")
}


function promptName(){
    var userName

userName = prompt("Please enter your name:")
    document.getElementById("name").textContent = "Hello, " + userName + "!";

}
    
    
    


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); }
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content"); for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show'); }
        } }
        }


function mOver(some_tag) { some_tag.innerHTML = "Hello";

some_tag.style.color="blue" ;
}
function mOut(element) { element.innerHTML = "Education"; element.style.color = "orange";
}