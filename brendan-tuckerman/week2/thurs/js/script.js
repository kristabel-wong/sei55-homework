/*
*TO DO: Game over conditions (win lose)
* bullet collision with cat + score --fadeout + sound
* cats spin 359 on hit
// Spaaaaace Caaaaaaats
 * collision with cat and ship
 * increment pace
 */


 //Cat-based functions:

//we are going to be moving the div containing all the cats.
let directionToggle = 1; // left or right cats
let rightId;
let leftId;

const checkVictory = () => {
    console.log('CheckingVictory');
    
    const catNum = $('.topCat').length
    console.log(catNum);
    
    if(catNum === 0) {
        gameOver();
    }
}; //end checkVictory;


const gameOver = () =>{
    $('.topCat').each(function() {
        $(this).remove()
    })
    $('#label').html('GAME');
    $('#score').html('OVER')

}; //end GameOver

const intervalRight = () =>{ //set off rught
   rightId = window.setInterval(moveRight, 50)
};

const intervalLeft = () => {
    leftId =window.setInterval(moveLeft, 50);
}

intervalRight(); //kick off the game


const $gameBoard = $('#game-container');
moveRight()
//move right
function moveRight () { //walks cats right
   
    directionToggle = -1;
    let w = window.innerWidth -500;
    let oldLeft = parseInt($gameBoard.css('left'))
    let newLeft;
    if (oldLeft < w) { 
    newLeft = oldLeft  + 5;
  
    $gameBoard.css('left', newLeft);
    }
    else {
        turnAround();
        clearInterval(rightId);
        dropDown();
        intervalLeft();
        
    }   
   
    
}; //end move right

function moveLeft() { //walks cat right
    
    directionToggle = 1;
  
    let w = -100;
    let oldLeft = parseInt($gameBoard.css('left'))
    let newLeft;
    if (oldLeft > w) {  //TODO: gameover if reaches bottom 0 <--put this in dropDown
    newLeft = oldLeft  - 5;
    
    
    $gameBoard.css('left', newLeft);
    }
    else {
        
        turnAround();
        clearInterval(leftId);
        dropDown();
        intervalRight();
       
    }   
} //endMoveLeft

const dropDown = () => { //moves the cats down by 10
    let y = parseInt($gameBoard.css('bottom'));
    if (y > 260) {
    $gameBoard.css('bottom', y-10);
    }
    else 
    {
        gameOver();
    }

    //TODO: games ends if it reaches a certain y

}//end dropDown

function turnAround() { //flips the cats
    $('.topCat').css('transform', 'scaleX('+directionToggle+')')

} //end turnAround

//individual cat functions 

const placeCats = () => {
    let catId = 1;
    let left = 1;
    let top = 1;
    for (let i = 0; i < 5; i++) { //5 rows
        for (let j = 0; j < 12; j++) { //12 cats per row
            $(`#cat${catId}`).css({
                left: left*60,
                top: top*30,

            })
            left++
            catId++
            
        } left = 1
        top++
        
    }
}

const giveCatsId = () => { //gives unique Id and position
    let catId = 1;
 
    $('.topCat').each (function() {
        $(this).attr('id', `cat${catId}`);
        catId++
    }) 
    placeCats();
    
} //end giveCatsID

giveCatsId() //gives all cats ID#s.

const hitCat = (cat) =>{
    cat.animate({
        rotate: '350deg',
    }, 1500 ).animate({
        opacity: 0
    }, function(){
    cat.remove()
    })
}; //end hitCat

//==============TITLE EFFECTS==============//


function randomChoice() { //for colour
    return( Math.floor(Math.random() * 256))
}

function randomColour() { //selects a random color
    return color = `rgb(${randomChoice()}, ${randomChoice()}, ${randomChoice()})`;
    
    // $('body').css('backgroundColor', color)
   
}

const styleTitle = () => { //title effect
    $('.titleEffect').each (function() {
        let color = randomColour()
        $(this).css('color', color);
    });
    
}//end styleTitle


window.setInterval(styleTitle, 100);



//hidden click
$gameBoard.click( function() {
    randomColour();
})

//****Ship Functions*****/

$('body').keydown( function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '68'){ //d key
    moveShipRight(); //replace this with  move ship
    }
    else if(keycode == '65') { //a key
        moveShipLeft(); 

    } else if(keycode == '32'){ //space
        createBullet();
        window.setInterval(fireBullet, 500);
    }

})

const moveShipRight = () => {
    let w = window.innerWidth;
    const shipPos = $('#ship').css('left');
    if (parseInt(shipPos) < w) {
    let newPos = parseInt(shipPos) + 5;
    $('#ship').css('left', newPos);
    };
}; //end moveShipRight

const moveShipLeft = () => { //moves sprite left
    const shipPos = $('#ship').css('left');
    if (parseInt(shipPos) > 0) {
        let newPos = parseInt(shipPos) - 5;
         $('#ship').css('left', newPos);
    };
}; //end moveShipLeft

let bulletIdCount = 0; //used to store unique ids for bullets

const createBullet = () => {
    
    //TODO -- if bulletId < 5
    let $shipX = $('#ship').css('left');
    $shipX = parseInt($shipX) +10;
    let $shipY = $('#ship').css('bottom');
    $shipY = parseInt($shipY) + 55;
    bulletIdCount ++
    let $newBullet = $('<img>').css({
        visibility: 'visible',
        left: $shipX,
        bottom: $shipY,
    }).attr({
        src: "bullet_sprite.png",
        class: "bullet",
        id: `bullet${bulletIdCount}`, //indiviual id
        alt: "bullet",
    });
    $('body').append($newBullet)

} //end createBullet()

const fireBullet = () => { //moves bullet xy
    //have to do this for each
    for (let i = 0; i < bulletIdCount; i++) { //iterate over all bullet## and animate
        const $currentBullet = $(`#bullet${i}`);
        $currentBullet.animate({
            top: '-25px'
        }, 3000, function() {
            $(this).remove() //removes the bullets after they leave the screen
        })
     } //end for
  
    

} //end fireBullet


const checkCollision = (obj1, obj2) => {

    console.log('Checking collision');
    
    const vx = obj1.offset().left - obj2.offset().left;
    const vy = obj1.offset().top - obj2.offset().top;
    
    const length = Math.sqrt(vx * vx + vy * vy);

    // if ( length < obj1.width() + obj2.width() ) {
    if ( length < obj1.width() + obj2.width() ) {
        // hitCat(obj2);
        // obj2.remove()
        return true;
    }
        
        return false;
}//end collisionChecki




const bulletHitCheck = () => { //Use bullet id
    //grab all thge bullets
    console.log('checking hit')
    
    
    //     const $currentBullet = $(`#bullet${i}`);
    $('.bullet').each( function () {
    
        let $currentBullet = $(this)
        $('.topCat').each(function () {
             
            let $currentCat = $(this);
        
            
            if (checkCollision($currentBullet, $currentCat)) {
                console.log('removing currentBullet');
                $currentBullet.remove()
                hitCat($currentCat); //spins and removes
                incrementScore();
                checkVictory();
                    
                }
                
            // if($bulletLocation.left + num >= $catLocation.left && $catLocation.left >= $bulletLocation.left - num && 
            //  $bulletLocation.top + num >= $catLocation.top && $catLocation.top >= $bulletLocation.top - num) {
                
            //     console.log('removing'+ currentCat.attr('id'));
                
            //     currentCat.remove();
            //     incrementScore()
            // } else{
            //     console.log('miss');
                
            // }
            
            
        }) //end topCat each
    })// end .bullet each  
     
    
    
}; //end bulletHitCheck

window.setInterval(bulletHitCheck, 400) //TESTING: runs bulletHitCheck after x seconds

//**previous version functions that still might be useful */

// let pace = 10;
// const sound = document.querySelector('#sound')


// function stopInterval (id) { //clear intervals
//     window.clearInterval(id);
// }


// function incrementPace() { //speed up cat
//     pace += 5;
// }

//TODO jquery the below

function incrementScore() {
    let score = document.querySelector('#score').innerHTML;
    parseInt(score);
    score++
    document.querySelector('#score').innerHTML = score;
}





