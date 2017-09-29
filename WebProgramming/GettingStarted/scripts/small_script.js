let logo = document.querySelector("img");
const chrome_logo = "images/chrome_logo_smaller.png";
const firefox_logo = "images/mozilla_logo_smaller.png";

logo.onclick = function() {
    let src = logo.getAttribute("src");
    if (src == firefox_logo){
        logo.setAttribute("src", chrome_logo);
    } else if (src == chrome_logo){
        logo.setAttribute("src", firefox_logo);
    } else {
        alert("Wrong image src!");
    }
}

let button = document.querySelector("button");
let heading = document.querySelector("h1");

function setUserName() {
    let name = prompt("Enter your name:");
    localStorage.setItem("name", name);
    heading.textContent = "Hi " + name;
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    heading.textContent = "Hi " + storedName;
}

button.onclick = function() {
    setUserName();
}
    
/*Syntax:
  document - represents the HTML documents
  
  Declare:
    let - declare a local variable
    const - declare a constant
    function - declare function (or anonymous function)
  
  Methods:
    querySelector - select first element with that tag name
    getAttribute - get attribute value
    setAttribute - set attribute value
    
  Functions:
    alert - pop-up box appears with the argument text
    prompt - brings up a dialog box
    
  Event:
    onclick - perform a function when element is clicked
	
  Special API:
    localStorage - store data in a browser and later retrieve it
	             - doesn't work if third party cookies are disabled; causes an error
*/
