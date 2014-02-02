onload = init;
var state;
var result;

function init() {
	var btnDataElement = document.getElementById("btnData");
	var btnClearElement = document.getElementById("btnClearElement");
	btnDataElement.onclick = newkwDisp;
	btnClreaElement.onclick = clearDisp;
	
	state = document.getElementById("state");
	result = document.getElementById("result");	
}

function clearDisp() {
	state.innerHTML ="";
	result.innerHTML ="";
}
