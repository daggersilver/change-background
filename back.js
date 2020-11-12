const arr = ["aqua", "chocolate", "cyan", "gray", "gold", "purple", "magenta"];

document.getElementById("b").addEventListener("click", function() {
	var random = Math.floor(Math.random()*arr.length);
	document.body.style.background = arr[random];
	document.getElementById("xolor").innerHTML = arr[random]
});
