
// Cat Walk

// https://gist.github.com/textchimp/20df0be7bcd892797619bdad203af94e

//There are 2 versions of code. 

//First version is using 'vw' unit to detect the window size: 100vw is the edge

//Second version is using 'px' unit.

// In this version, the cat can dance with music and random background color change (1 per second).

// Please click the cat to start.
// Why? Can't play background music without clicking the page first
// Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.

// const danceCat = "https://media0.giphy.com/media/PdKTOwHgOASGY/giphy.gif?cid=ecf05e47gz11f5xx5udwqj9xd022wqmofmrxyyj6wrbajsx1&rid=giphy.gif&ct=g";

const cat = document.getElementById('cat');

const danceCat = "image/danceCat.gif";
const catUrl = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const music = document.querySelector('#music');

let direction = true;
//direction is a boolean: 
//true: left->right | false: right->left

const catWidth = cat.clientWidth;
// return the image size in 'px'

const initCat = function () {
    cat.style.position = "absolute";
    cat.style.top = "20vh";
    cat.style.left = "0px";
}();

//===========cat walk vw version====================

// const pxToVw = function (px, windowEdge) {
//     // transfer unit from px to vw
//     return px * 100 / windowEdge;
// }

// const catWalkVw = function () {
//     let nextPosition = null;
//     const windowWidth = window.innerWidth;

//     const catWidthInVw = Math.ceil(pxToVw(catWidth, windowWidth)); // cat width in vw (ceil)

//     const currentPosition = parseInt(cat.style.left) // currentPosition: vw unit

//     // window edge = window width - cat width
//     if (direction && currentPosition < 100 - catWidthInVw) {
//         // walk forward
//         nextPosition = currentPosition + 1;
//     } else if (direction && currentPosition === 100 - catWidthInVw) {
//         // touch the boundary and turn around
//         // console.log(currentPosition, catWidthInVw);
//         direction = !direction;
//         cat.style.transform = "scaleX(-1)";
//     } else if (!direction && currentPosition > 0) {
//         // walk bak
//         nextPosition = currentPosition - 1
//     } else if (!direction && currentPosition === 0) {
//         // touch the boundary and turn around
//         direction = !direction;
//         cat.style.transform = "scaleX(1)";
//     } else {
//         // debugger
//         console.log(currentPosition);
//         console.log(direction);
//     }
//     // console.log(currentPosition);
//     // console.log(nextPosition);
//     cat.style.left = `${nextPosition}vw`
// } // catWalkVw

// // window.setInterval(catWalkVw, 50);


//============cat walk px version=========

const catWalk = function () {
    let nextPosition = null;
    const windowWidth = window.innerWidth;
    const currentPosition = parseInt(cat.style.left);
    const edge = windowWidth - catWidth;
    const middle = Math.ceil(edge / 2 / 10) * 10;
    // to ensure number's step is 10
    // initial currentPosition value is 0

    if (direction && currentPosition < edge) {
        // walk forward
        nextPosition = currentPosition + 10;
    } else if (direction && currentPosition >= edge) {
        // touch or beyond the boundary -> turn around
        direction = !direction;
        cat.style.transform = "scaleX(-1)";
    } else if (!direction && currentPosition > 0) {
        // walk bak
        nextPosition = currentPosition - 10;
    } else if (!direction && currentPosition <= 0) {
        // touch or beyond the boundary -> turn around
        direction = !direction;
        cat.style.transform = "scaleX(1)";
    } else {
        // debugger
        console.log(currentPosition);
        console.log(direction);
    }

    // dance function
    if (currentPosition === middle) {
        document.body.style.backgroundColor = colorGen();
        cat.src = danceCat;
        window.clearInterval(timerId);
        music.muted = false;
        music.play();
        window.setTimeout(function () {
            cat.src = catUrl;
            music.pause();
            timerId = window.setInterval(catWalk, 50);
            window.clearInterval(timerGB);
            document.body.style.backgroundColor = 'white';
        }, 10000);

        const timerGB = window.setInterval(function () {
            document.body.style.backgroundColor = colorGen();
        },1000);

    }

    cat.style.left = `${nextPosition}px`;
} // catWalk


const colorGen = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }


let timerId = null;

const button = document.getElementById('btn');

cat.addEventListener('click',function () {
    timerId = window.setInterval(catWalk, 50);
}, {once : true})
// this event listener can only run once, otherwise, a bug will occur




