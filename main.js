var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



var last_pos_x,last_pos_y;
var color = document.getElementById("color");
var radius = document.getElementById("radius");
var width_of_line = document.getElementById("widthOfCircle");

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);

function my_mousedown(e){
    mouseEvent = "mousedown";
}
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function my_mouseup(e){
    mouseEvent = "mouseup";
}
function my_mousemove(e){
    current_pos_x = e.clientX-canvas.offsetLeft;
    current_pos_y= e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_pos_x,current_pos_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}