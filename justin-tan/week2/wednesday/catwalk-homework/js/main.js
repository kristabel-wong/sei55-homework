// console.log(`hello`)

// References variables
const catGif = document.querySelector('#catGif');
const moneyOne = document.querySelector('#moneyOne');
const moneyTwo = document.querySelector('#moneyTwo');
const background = document.querySelector('#background');
const words = document.querySelector('h1');

//References CSS
catGif.style.position = "absolute";
catGif.style.transform = "scaleX()";
catGif.style.left = "0%";
catGif.style.display = 'inline-block';

moneyOne.style.visibility= "hidden";
moneyTwo.style.visibility = "hidden"
background.style.visibility = "hidden";


// global variables
let middleAnimation = "start";
let catDirection = "right";
let walkID = null;


const catWalk = function () {

    const catGifLeft = parseInt(catGif.style.left);
    
    if (catDirection === "right") {
    
        if (catGifLeft < 80) {
            catGif.style.left = `${catGifLeft + 1}%`;
            console.log(catGifLeft);

                if (catGifLeft === 40) {
                    window.clearInterval(walkID); //middle animation start
                    catGif.src = "https://acegif.com/wp-content/gifs/dancing-cat-66.gif";
                    moneyOne.style.visibility = "visible";
                    moneyTwo.style.visibility = "visible";
                    background.style.visibility = "visible";

                    window.setTimeout( function () {
                        catGif.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
                        moneyOne.style.visibility = "hidden";
                        moneyTwo.style.visibility = "hidden";
                        background.style.visibility = "hidden";
                        walkID = window.setInterval(catWalk,20)
                    }, 3000); //middle animation ends
                } 
                
            } else {
                catGif.style.transform = "scaleX(-1)";
            catDirection = "left";
        }
        
    } else if (catDirection === "left") {
        
        if (catGifLeft > 0) {
            catGif.style.left = `${catGifLeft - 1}%`;
            
            if (catGifLeft === 40) {
                window.clearInterval(walkID) // middle animation start
                moneyOne.style.visibility = "visible";
                moneyTwo.style.visibility = "visible";
                background.style.visibility = "visible";
                catGif.src = "https://acegif.com/wp-content/gifs/dancing-cat-66.gif";
                window.setTimeout( function () {
                    catGif.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
                    moneyOne.style.visibility = "hidden";
                    moneyTwo.style.visibility = "hidden";
                    background.style.visibility = "hidden";
                    walkID = window.setInterval(catWalk,20);
                }, 3000);
                    }// middle animation end
                } 

            else {
                catGif.style.transform = "scaleX(1)";
                catDirection = "right";
            }
                
    }
    
}

walkID = setInterval(catWalk, 20);



