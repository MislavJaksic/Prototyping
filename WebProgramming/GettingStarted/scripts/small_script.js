let image = document.querySelector("img");
const chrome_logo = "images/chrome_logo_smaller.png";
const firefox_logo = "images/mozilla_logo_smaller.png";

image.onclick = function() {
	let src = image.getAttribute("src");
	if (src == firefox_logo){
		image.setAttribute("src", chrome_logo);
	} else if (src == chrome_logo){
		image.setAttribute("src", firefox_logo);
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

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	heading.textContent = "Hi " + storedName;
}

button.onclick = function() {
	setUserName();
}
	













