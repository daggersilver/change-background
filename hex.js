const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector("button").addEventListener("click", function(){
    var hex = "#";
    for(var i=0; i<6; i++){
        var random = Math.floor(Math.random()*col.length);
        hex = hex + col[random]
    }
    
	document.body.style.background = hex;
    document.getElementById("xolor").innerHTML = hex;
    hex = ""
})




