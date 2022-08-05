console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;')

// const cat = document.querySelector('img');
// cat.style.left = "0px"
// let direction = 10; // walking right

// const catWalk = function(feline){
//     let catPos = parseInt(cat.style.left);
//     let rightEdge = window.innerWidth - 260; // width of the cat gif

//     // check if we are at the edge of screen
//     if(catPos >= rightEdge){
//         // change direction to -10
//         direction = -10;
//         // flip cat gif horizontally
//         cat.style.transform = "scaleX(-1)";
//     } else if (catPos <= -50 ){
//         // change direction to +10
//         direction = 10;
//         // flip cat image back to original direction
//         cat.style.transform = "";
//     }   
//     // happy with direction - keep walking
//     cat.style.left = `${catPos + direction}px`;    
// }

// const stopCat = window.setInterval(catWalk, 50);

// dancing bonus
// hide the walking cat visibility: hidden ?
// show a dancing cat gif 
// flashing background body.style.backgroundColor = rotate?


// **** jQuery solution ****

const $luke = $('#luke');

const lukeShow = function(){
    $luke.attr('src','images/LukeLookDown.png')
    $luke.animate({
        bottom: '410px'
    }, 4000, 'linear', lukeHide);
}

const lukeHide = function(){
    $luke.attr('src','images/LukeSmile.png')
    $luke.animate({
        bottom: '270px'
    }, 2000, 'linear');
}
const $cat = $('#cat');
$cat.css('left','0');

const walkRight = function(){
    lukeShow();
    $cat.css('transform', '');
    $cat.animate({
        left: window.innerWidth-280
    }, 6000,'linear', walkLeft);
}

const walkLeft = function(){
    $cat.css('transform', 'scaleX(-1)');
    $cat.animate({
        left: '0px'
    }, 6000,'linear', walkRight);
}

// light TODO v2 IDEA create a night time class and add to all elements on the page
const $body = $('body');
const $stars = $('#stars');
const setLightLevel = function(angle){
    if (angle <= 40){
        // set bg to pink
        $body.css('background-color', 'rgb(235, 186, 232)')
        $stars.css('visibility', 'visible');
    } else if (angle <= 140){
        // set bg to black
        $body.css('background-color', 'black')
    } else if (angle <= 200){
        //set bg to pink
        $body.css('background-color', 'rgb(235, 186, 232)')
    } else if (angle <= 320) {
        // set to blue
        $body.css('background-color', 'rgb(154, 209, 231)')
        $stars.css('visibility', 'hidden');
    }
}

// sun and moon
const $sunmoon = $('#sunmoon');
let angle = 0
const dayNight = function(){
    $sunmoon.css('transform',`rotate(${angle}deg)`);
    if (angle<360){
        angle += 1;
    }else{
        angle = 0;
    }
    setLightLevel(angle);
}

// start the cat moving
walkRight();
window.setInterval(dayNight, 50);