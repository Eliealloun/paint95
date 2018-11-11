var color = 'black';



document.getElementById('canvas').addEventListener("mousedown", function () { // commmence a dessiner
    document.getElementById('canvas').addEventListener("mousemove", drawing)
});

document.getElementById('canvas').addEventListener("click", function () { // arreter de dessiner
    document.getElementById('canvas').removeEventListener("mousemove", drawing)
});


document.getElementById("colors").addEventListener("click", function () { // change color
    color = event.target.id
});


function drawing() {
    var draw = document.createElement("div")
    draw.style.left = event.pageX - this.offsetLeft + "px";
    draw.style.top = event.pageY - this.offsetTop + "px";
    draw.style.backgroundColor = color;
    draw.style.width = "10px";
    draw.style.height = "10px";
    draw.style.position = "absolute";
    document.getElementById("canvas").appendChild(draw)
}



/*document.getElementById("clearbtn").addEventListener("click", function () {
    this.getElementsByTagName('div')
    button.removeChild("colors");

});


Canvas.clear = function () {
    var canva = document.getElementById("div");
    var allcolors = div.getElementsByTagName('div')
    for (var i = canvas.length - 1; i >= 0; i--) {
        canva.removeChild(div[i]);
    }
}; */