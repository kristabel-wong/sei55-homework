



const $blackCat = $('.blackcat');
const $kitten = $('.kitten');
const $moneyCat = $('.moneycat');
const $h1 = $('h1');


// const catWalkToRight = function(){
//     $blackCat.animate({left: "+=500"}, 2000);
// }

function animateBlackCat() {
    $blackCat.animate({ left: "+=700" }, 2000);
    $blackCat.animate({ top: "+=500" }, 100);
    $blackCat.animate({ left: "-=700" }, 100);
    $blackCat.animate({ top: "-=500" }, 2800);
}
animateBlackCat()//recursive function
window.setInterval(animateBlackCat, 5000)



function animateKitten() {
    console.log("Called");
    $kitten.css({ right: '10%' });
    $kitten.animate({ right: '-100%' }, 5000, 'linear', function () { animateKitten(); });
}
animateKitten();//recurvsive function   


function animateMoneyCat() {
    $moneyCat.animate({ right: "500" }, 10000, returnMoneyCat);
}
function returnMoneyCat() {
    $moneyCat.css('right', '0px');
    animateMoneyCat();
}
animateMoneyCat(); //recurvsive function



//Audio is a built in function that takes an audio file as an argument which returns an audio object. It has defaultplay and pause function (e.g.toLowerCase())
const nyanCatSong = new Audio("image/nyan.mp3");
//the return value of the Audio is assigned to the nyanCatSong variable. 
// nyanCatSong = {
//     play: function() {
//         // start playing "image/nyan.mp3" file
//     },
//     pause: function() {
//         // pause playing "image/nyan.mp3" file
//     }
// }
let musicIsCurrentlyPlaying = false

const playMusic = function () {
    if (musicIsCurrentlyPlaying) {
        nyanCatSong.pause()
        musicIsCurrentlyPlaying = false
        // console.log("Pausing")
    } else {
        nyanCatSong.play();
        musicIsCurrentlyPlaying = true
        // console.log("Playing")
    }
    console.log(`Music currently playing: ${musicIsCurrentlyPlaying}`)
}

$h1.click(playMusic);







