var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var task = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var icon = document.createElement("i");

	icon.classList.add('fas', 'fa-trash-alt');
	span.appendChild(icon);
	ul.appendChild(li).append(span);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	// li.appendChild(span);
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
	if(evt.target.tagName === "I"){
		evt.target.parentElement.parentElement.remove()
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
//click on an item to toggle the done class
ul.addEventListener("click", completeTask);
//Delete tasks for list
ul.addEventListener("click", deleteTask);
