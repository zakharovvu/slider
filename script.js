'use strict'

let line = document.querySelector('#line');
let slider1 = document.querySelector('#slider1');
let slider2 = document.querySelector('#slider2');

min.value = 100;
max.value = 385;

document.addEventListener('mouseup', stop);
function stop() {
    document.onmousemove = null;
    slider1.mouseup = null;
}

slider1.onmousedown = function(e) { //первый ползунок
    moveAt(e);
    function moveAt(e) {
        let startLine = e.pageX - line.offsetLeft - line.clientLeft - (slider1.offsetWidth / 2);
        if (startLine < 0) startLine = 0; 
        if (startLine > (line.clientWidth - slider1.clientWidth)) startLine = line.clientWidth - slider1.clientWidth;
       
        slider1.style.left = Math.floor(startLine)  + 'px';
        min.value = Math.floor(startLine);
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
    slider1.ondragstart = function() {
        return false;
    };
}
slider2.onmousedown = function(e) { //второй ползунок
    moveAt(e);
    function moveAt(e) {
        let startLine = e.pageX - line.offsetLeft - line.clientLeft - (slider2.offsetWidth / 2);
        if (startLine < 0) startLine = 0; 
        if (startLine > (line.clientWidth - slider2.clientWidth)) startLine = line.clientWidth - slider2.clientWidth;
        slider2.style.left = startLine  + 'px';
        max.value = Math.floor(startLine);
       
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
    slider2.ondragstart = function() {
        return false;
    };
}

