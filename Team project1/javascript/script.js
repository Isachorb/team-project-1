/*
	  JavaScript

      Arraial do Cabo Project
	  Author: Isabel Chorbajian
      Date: 12/11/17

      Filename: script.js
	  
*/
"use Strict";


function validateInput() {
	var typeName = document.getElementById("your_name").value;
	var typeEmail = document.getElementById("your_email").value;
	
	alert("Thank You " + typeName + ". We will contact you at " + typeEmail + ".");

}

function createEventListener() {
	var addButton = document.getElementById("button");
	if (addButton.addEventListener) {
		addButton.addEventListener("click", validateInput, false);
	} else if (addButton.attachEvent) {
		addButton.attachEvent("onclick", validateInput);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
	window.attachEvent("onclick", createEventListener);
}




