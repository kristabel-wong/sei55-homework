// Create a new Javascript file and link to it with a script tag at the bottom.
console.log('Is this thing on?')
// Create a variable to store a reference to the img.

const darnCat = document.querySelector('img');

darnCat.style.left = '0px'
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.


let directionToggle = 'right';
let rightId;
let leftId;
let pace = 10;


function stopInterval (id) {
    window.clearInterval(id);
}


function catWalkRight () {
    
    directionToggle = 'right'
  
    let w = window.innerWidth
    let oldLeft = parseInt(darnCat.style.left);

    if (oldLeft < w) { 

    console.log(oldLeft+'px')
    newLeft = oldLeft - pace; 
    darnCat.style.left = newLeft + 'px';
    }
    else {
        document.querySelector('#label').style.display = 'none';
        document.querySelector('#score').innerHTML = 'GAME OVER' //circles forever
    } 

    if (newLeft < -400){
        document.querySelector('#label').style.display = 'none';
        document.querySelector('#score').innerHTML = 'GAME OVER' //circles forever
    }


    
}

function catWalkLeft() {
   
    directionToggle = 'left';
    let w = window.innerWidth
    let oldLeft = parseInt(darnCat.style.left);

    if (oldLeft < w) { 

    console.log(oldLeft+'px')
    newLeft = oldLeft + pace; 
    darnCat.style.left = newLeft + 'px';
    
    }
    else {
        document.querySelector('#label').style.display = 'none';
        document.querySelector('#score').innerHTML = 'GAME OVER' //circles forever
    } 
    
}



function randomChoice() { //for colorur
    return( Math.floor(Math.random() * 255))
}

function incrementPace() {
    pace += 5;
}

function randomColour() {
    
    color = `rgb(${randomChoice()}, ${randomChoice()}, ${randomChoice()})`;
    document.body.style.backgroundColor = color
}


function turnAround() {
    console.log('clicked');


    if(darnCat.style.transform === 'scaleX(1)') {
        darnCat.style.transform ='scaleX(-1)';
        // window.clearInterval(rightId);
        // window.clearInterval(leftid);
        leftId;
    }
    else {
        darnCat.style.transform = 'scaleX(1)'
        // window.clearInterval(leftId);
        rightId;
    }
    
}

function getNewDirection() {
    if (directionToggle === 'right') {
        window.clearInterval(rightId);
        window.clearInterval(leftId);
        leftId = window.setInterval(catWalkLeft, 50)
    } else {
        window.clearInterval(leftId);
        window.clearInterval(rightId);
        rightId = window.setInterval(catWalkRight, 50);
    }
}

function incrementScore() {
    let score = document.querySelector('#score').innerHTML;
    parseInt(score);
    score++
    document.querySelector('#score').innerHTML = score;
}

const sound = document.querySelector('#sound')




darnCat.addEventListener('click', turnAround)
darnCat.addEventListener('click', incrementPace)
darnCat.addEventListener('click', getNewDirection)
darnCat.addEventListener('click', incrementScore)
darnCat.addEventListener('click', randomColour)
darnCat.addEventListener('click', function() {
    sound.play();
})
// window.setInterval(catWalkRight, 50);
// window.setInterval(randomColour, 100)

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.