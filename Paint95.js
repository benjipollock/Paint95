/**
 * Created by itc_user on 6/22/2016.
 */
//sets colors
var colorAttribute = ['eraser','white','red', 'orange', 'yellow', 'green', 'aqua','blue', 'indigo', 'violet', 'brown', 'black'];
var dim = 20;
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
var notClicked = function(clickEvent){
    clickOn = false;
};
// var leftCanvas = function(clickEvent){
//     clickOn = false;
// };
//changes color to the background color of the button chosen
var changeColor = function(clickEvent){
    currentColor = clickEvent.target.style.backgroundColor;
};
// var clearAll = function(){
//     for(var a=0; a<dim*dim; a++) {
//         document.getElementsByClassName('cell')[a].style.backgroundColor = 'none';
//     }
// };




// var canvas = document.getElementsByClassName('canvas')[0];
// canvas.style.width = (dim+10)*10 + 'px';
// canvas.addEventListener('mouseleave',leftCanvas);

//creates buttons
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

//create input for size



var listOfButtons = document.getElementsByTagName('button');// trying to get overall color when button is pressed *****
console.log(listOfButtons);
for (var b = 0; b<listOfButtons.length; b++){
    listOfButtons[b].addEventListener('click', changeColor);
}

//creates canvas
for (var i=0; i<dim; i++){
    var row = document.createElement('div');
    row.className = 'row';
    for (var j=0; j<dim; j++){
        var square = document.createElement('div');
        square.className ='cell';
        row.appendChild(square);

    }
    document.body.appendChild(row);
}

var listOfCells = document.getElementsByClassName('cell');
for (var k = 0; k<dim*dim; k++ ){
    listOfCells[k].addEventListener('mousedown', clicked);
    listOfCells[k].addEventListener('mouseover', paint);
    listOfCells[k].addEventListener('mouseup', notClicked);
}

var clearAll = function () {
    var cells = document.getElementsByClassName('cell');
    for(i=0; i<cells.length; i++){
        cells[i].style.backgroundColor = "white";
    }
};

var clearButton = document.createElement('button');
clearButton.textContent = "Clear";
clearButton.className = "clearButton";
document.body.appendChild(clearButton);
clearButton.addEventListener('click',clearAll);





