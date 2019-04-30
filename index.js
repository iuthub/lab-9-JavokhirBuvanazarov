
function bigger() {
	document.getElementById('textbox').style.fontSize = "24pt";
}
function check(){
	if (document.getElementById("bing").checked == true) {
		let change = document.getElementById('textbox');
		change.style.fontWeight = 'bold';
		change.style.textDecoration = 'underline';
		change.style.color ='green';
		change.style.fontSize = '15px';
		change.style.paddingTop = '20px';
	} else {
		document.getElementById('textbox').style.fontWeight = 'normal';
	}
}

function snoopify(){
	document.getElementById('textbox').style.textTransform = 'uppercase';
	document.getElementById('bigpin').textContent = "Big pin!";
	alert("Helo");
}