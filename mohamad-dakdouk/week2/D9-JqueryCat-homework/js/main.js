console.log(`Cat`);

// The Cat Walk

// Who needs Milan when you have JavaScript?


// USING JQUERY create a cat image moving
const $cat = $(`#catwalk`);
$(`#catwalk`).css({
    width: `300px`,
    left: `100px`,
    top: `100px`,
    // position: `absolute`
})



// const catWalk = function(){
//     let currentL = $(`#catwalk`).css(left);
//     let currentT = $(`#catwalk`).css(top);
//     $(`#catwalk`).css(left) = `${currentL + 1}`
//     $(`#catwalk`).css(top) = `${currentT + 1}`

// }
// window.setInterval(catWalk, 10);
// console.log($cat);






const $power = $(`#power`);
console.log($power);




// $(`body`).css({
//     backgroundImage: $(`#power`),
//     webkitBackgroundSize: `cover`,
//     mozBackgroundSize: `cover`,
//     oBackgroundSize: `cover`,
//     backgroundSize: `cover`,
// })

$(`#power`).css({
    backgroundColor: `red`,
    border: `10px solid black`,
    width: $(window).width(),
    height: $(window).height(),
    // position: `absolute`,
  
 })

$(`#guiltyone`).css({
    left: `700px`,
    top: `800px`,
    width: `150px`,
    position: `relative`,
})
$(`#guiltyone`)
    .fadeOut(2500)
    .fadeIn(4000);
 $(`#guiltytwo`).css({
     left: `100px`,
     top: `600px`,
     width: `150px`,
    position: `relative`,
    // visibility: `hidden`,
    // opacity: 0,
    // transition: `visibility 0s 2s`,
 })
 $(`#guiltytwo`)
    .fadeOut(2500)
    .fadeIn(4000);
// $(`iframe`).css({
//     border: `10px solid black`,
// })


//     // return currentVideo;


// // Same as above but using JQuery

// const $videos = $(`a`);

// console.log($videos);

// $videos.each( function(){
//     // console.log(this.href);
//     const currentVideoLink =$(this).attr(`href`);

//     const thumbnailUrl = youtube.generateThumbnailUrl( currentVideoLink);

//     const $img = $(`<img>`);
//     $img.attr({
//         src: thumbnailUrl,
//         alt: `Youtube video`,
//         target: `_blank`
//     });

//     $(this).append($img);

// })

// //<< finished answer-->>


// // The below is correct in that eq(i) - can be used 
// for (let i = 0; i < $videos.length; i++) {
//     let $currentVideo = $videos.eq(i);
//     console.log($currentVideo);

$(document).ready(function (){
    $(`#catwalk`).animate({left: "+=100%", top: "+=100%"}, 3000);
    // $(`#catwalk`).animate({top: "+=100%"}, 2000);
    $(`#catwalk`).animate({left: "-=100%", top: "-=100%"}, 3000);

});
ready()

// catMove();


// function catMove(){
//     $(`#catwalk`).animate({
//         left: "+=100%", 2000
//         top: "+=100%", 2000 }
//     )};

// catMove();

