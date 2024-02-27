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
    
 function myFunction1() {

    // Toggle the "show1" class for the dropdown menu
            document.getElementById("myDropdown1").classList.toggle("show1"); }
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn1'))  // Get all elements with the class "dropdown-content1" 
                {
                var dropdowns1 = document.getElementsByClassName("dropdown-content1"); for (var i = 0; i < dropdowns1.length; i++) 
                 // Iterate through each dropdown menu
                {
                var openDropdown1 = dropdowns1[i];
                if (openDropdown1.classList.contains('show1')) {
                openDropdown1.classList.remove('show1'); }
                } }
                }

function mOver(some_tag) { some_tag.innerHTML = "Hello";

some_tag.style.color="blue" ;
}
function mOut(element) { element.innerHTML = "Education"; element.style.color = "orange";
}