// Spaaaaace Caaaaaaats

/*
 *TO DO: Game over conditions (win lose)
 * bullet collision with cat + score --fadeout + sound
 * cats spin 359 on hit
 * collision with cat and ship
 * increment pace
 */


 //Cat-based functions:

//we are going to be moving the div containing all the cats.
let directionToggle = 1; // left or right cats
let rightId;
let leftId;


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
    $gameBoard.css('bottom', y-10);

}//end dropDown

function turnAround() { //flips the cats
    $('.topCat').css('transform', 'scaleX('+directionToggle+')')

} //end turnAround

//individual cat functions 

const giveCatsId = () => { //gives unique Id
    let catId = 1;
    $('.topCat').each (function() {
        $(this).attr('id', `cat${catId}`)
        catId++
    })
} //end giveCatsID

giveCatsId() //gives all casts IDs.


//title effects:


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
    
}

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
    else if(keycode == '65') {
        moveShipLeft();
      
        

    } else if(keycode == '32'){
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
    for (let i = 0;i < bulletIdCount; i++) { //iterate over all bullet## and repositions
        const $currentBullet = $(`#bullet${i}`);
        let bulletOld = $currentBullet.css('bottom');
        let bulletNew = parseInt(bulletOld) + 10;
        $currentBullet.css('bottom', bulletNew);
    }

} //end fireBullet




const bulletHitCheck = () => { //Not working
    //grab all thge bullets
    console.log('checking hit')
    let bulletLocation;
    $('.bullet').each(function () {
        bulletLocation  = $(this).offset() //should return coords for bullet
        console.log('Bullet Location:');
        console.log(bulletLocation);
    
        //iterate over the catID# instead of class
        for (let i = 0; i < 60; i++) {
            const $currentCat = $(`#cat${i}`); //grabs each cat id 
            console.log($($currentCat.css('left')));
            // let catLocation = $currentCat.offset(); //returns object with top: ##, leftt: ## in absolute terms
            // console.log('Cat Location:');
            // console.log(catLocation); //this is currently returning undefined
            if(bulletLocation.top === catLocation.top && bulletLocation.left == catLocation.left) {
            // if(bulletLocation.top +10 > catLocation.top && catLocation.top > bulletLocation.top - 10  && bulletLocation.left +10 > catLocation.left && catLocation.left  > bulletLocation.left -10) {
                console.log(`%c***************Hit*****************, 'color:red'`)
                $currentCat.css('visibility', 'hidden');
           
            }//end if
            
            
        } //end for


    }) //end bullet each
    

} //end bulletHitCheck

// window.setTimeout(bulletHitCheck, 2000) //TESTING: runs bulletHitCheck after 14seconds

//**previous version functions that still might be useful */

// let pace = 10;
// const sound = document.querySelector('#sound')


// function stopInterval (id) { //clear intervals
//     window.clearInterval(id);
// }


// function incrementPace() { //speed up cat
//     pace += 5;
// }



// function incrementScore() {
//     let score = document.querySelector('#score').innerHTML;
//     parseInt(score);
//     score++
//     document.querySelector('#score').innerHTML = score;
// }





