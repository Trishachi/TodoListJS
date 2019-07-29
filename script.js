var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var task = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

//functions for creating new tasks
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//function for marking task as completed
function completeTask(ev){
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("done");
	}
}

//function for deleting tasks
function deleteTask(evt){
	if(evt.target.tagName === "SPAN"){
		console.log("Task Deleted");
		evt.target.parentElement.remove()
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
//click on an item to toggle the done class
ul.addEventListener("click", completeTask);
//Delete tasks for list
ul.addEventListener("click", deleteTask);
