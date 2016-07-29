/**
 * Created by itc_user on 6/22/2016.
 */
//sets colors
var colorAttribute = ['eraser','white','red', 'orange', 'yellow', 'green', 'aqua','blue', 'indigo', 'violet', 'brown', 'black'];
var dim = 50;
var clickOn = false;
var currentColor;


var paint = function(clickEvent){
    if (clickOn === true)
    clickEvent.target.style.backgroundColor = currentColor;
};
var clicked = function(clickEvent){
    clickOn = true;
    paint(clickEvent);
};
var notClicked = function(){
    clickOn = false;
};
//changes color to the background color of the button chosen
var changeColor = function(clickEvent){
    if (clickEvent.target.style.backgroundImage === 'url("http://dedworthmiddle.co.uk/Images/eraser.png")'){
        currentColor = 'white';
    }
    else {
        currentColor = clickEvent.target.style.backgroundColor;
    }
};
//creates buttons
var createButtons = function() {
    for (var c=0; c<colorAttribute.length; c++){
        var button = document.createElement('button');
        document.body.appendChild(button);
        if (colorAttribute[c] === 'eraser'){
            button.style.backgroundImage ="url('http://dedworthmiddle.co.uk/Images/eraser.png')";
        }
        else {
            button.style.backgroundColor = (colorAttribute[c]);
        }
    }
    var listOfButtons = document.getElementsByTagName('button');
    for (var b = 0; b<listOfButtons.length; b++){
        listOfButtons[b].addEventListener('click', changeColor);
    }
};
//creates canvas
var createCanvas = function() {
    for (var i = 0; i < dim; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        for (var j = 0; j < dim; j++) {
            var square = document.createElement('div');
            square.className = 'cell';
            row.appendChild(square);
        }
        document.body.appendChild(row);
    }
};
var addEventToCell = function(){
    var listOfCells = document.getElementsByClassName('cell');
    for (var k = 0; k<dim*dim; k++ ){
        listOfCells[k].addEventListener('mousedown', clicked);
        listOfCells[k].addEventListener('mouseover', paint);
        listOfCells[k].addEventListener('mouseup', notClicked);
    }
};
var clearAll = function () {
    var cells = document.getElementsByClassName('cell');
    for(var i=0; i<cells.length; i++){
        cells[i].style.backgroundColor = "white";
    }
};
var createClearButton = function(){
    var clearButton = document.createElement('button');
    clearButton.textContent = "Clear";
    document.body.appendChild(clearButton);
    clearButton.addEventListener('click',clearAll);
};
var start = function() {
    createButtons();
    // put number input here
    createCanvas();
    addEventToCell();
    createClearButton();
};
window.onload = start();






