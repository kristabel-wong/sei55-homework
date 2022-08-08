
// Cat Walk

// https://gist.github.com/textchimp/20df0be7bcd892797619bdad203af94e

//This code uses jQuery to interact with the DOM

// Please click the cat to start.
// Why? Can't play background music without clicking the page first
// Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.


//========== Materials ============

const danceCatUrl = "image/danceCat.gif";
const catUrl = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const musicUrl = "music/bensound-funday.mp3";


//=========== Gobal Variables ===========

const $cat = $("#cat");
const $music = $("#music")[0];


let timerId = null;
// store the main timer id
let direction = true;
//direction is a boolean: 
//true: left->right | false: right->left

//========== tools ============

const tools = {
    //1.
    initCat: function () {
        // init cat position
        $cat.css({
            position: "absolute",
            top: "20vh",
            left: "0px",
        })
    }, // initCat

    //2.
    colorGen: function () {
        // random color generator in (R,G,B) form and set the <body> background color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        $('body').css("background-color", `rgb(${r},${g},${b})`)
    }, //colorGen

    //3.
    setNextPosition: function (currentPosition, edge) {
        // set the next position according to the current position, direction, and the edge: window width - image width
        let nextPosition = null;

        if (direction && currentPosition < edge) {
            // walk forward -> +10px
            nextPosition = currentPosition + 10;
        } else if (direction && currentPosition >= edge) {
            // touch or beyond the boundary -> turn around

            direction = !direction;
            $cat.css("transform", "scaleX(-1)")
        } else if (!direction && currentPosition > 0) {
            // walk back -> -10px
            nextPosition = currentPosition - 10;
        } else if (!direction && currentPosition <= 0) {
            // touch or beyond the boundary -> turn around
            direction = !direction;
            $cat.css("transform", "scaleX(1)")
        } else {
            // debugger
            // console.log(currentPosition);
            // console.log(direction);
        }

        $cat.css("left", `${nextPosition}px`);
    }, // setNextPosition

    //4.
    danceCat: function (currentPosition, middlePosition) {
        // function for dance cat in the middle with music and background color change for 10s
        if (currentPosition === middlePosition) {

            //1. change the image and background color and stop the main timer by timer id
            $cat.attr("src", danceCatUrl);;

            this.colorGen();
            window.clearInterval(timerId);

            //2. play the music
            $music.muted = false;
            $music.play();

            //3. set background color change timer - 1s for 1 color
            const colorTimer = window.setInterval(this.colorGen, 1000);

            //4. set dance timer - after 10s back to original state
            window.setTimeout(function () {
                //a. change back the image and background color, pause the music
                $cat.attr("src", catUrl);

                $("body").css("background-color", "white");
                $music.pause();

                //b. clear color time
                window.clearInterval(colorTimer);

                //c. call main function again
                timerId = window.setInterval(catWalk, 50);
            }, 10000);
        }
    }, // danceCat


}

//============cat walk px version=========

const catWalk = function () {
    //1. detect window width, image width and calculate the edge: window width - image width
    const edge = window.innerWidth - parseInt($cat.css("width"));

    //2. calcuate the middle position (roughly)
    // the value divide by 10 then multiply 10
    // to ensure value in the step of 10px
    const middlePosition = Math.ceil(edge / 2 / 10) * 10;

    //3. detect the current position in 'px'
    const currentPosition = parseInt($cat.css("left"));

    //4. set the next position 
    tools.setNextPosition(currentPosition, edge);

    //5. dance in the middle position
    tools.danceCat(currentPosition, middlePosition);
} // catWalk

tools.initCat();
$cat.one("click", function () {
    timerId = window.setInterval(catWalk, 50);
})
// this event listener can only run once, otherwise, a bug will occur




