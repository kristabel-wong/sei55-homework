
// console.log( 'Youtube is awesome! ')

// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
// 1. const arrayItems = document.querySelectorAll('a');
//     // console.log(arrayItems);

// 2.// Iterate through the array. In each iteration of the loop:
// for ( let i = 0; i < arrayItems.length; i++) {

//  3.   // Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
//     const currentLink = arrayItems[i].href;
//     console.log(currentLink)
    
//     // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
//     const thumbnailUrl = youtube.generateThumbnailUrl(currentLink);

//     // Create an IMG element using document.createElement(tagName)
//     const newImage = document.createElement('img');
    
//     // Set the "src" of the IMG element using newImage.src = 'something'
//     newImage.src = thumbnailUrl;

//     // Append the IMG to the link using element.appendChild(element)
//     // arrayItems[i].appendChild(newImage);

// };


// jQuery replacements for the above

// const $arrayItems = $('a');
// console.log($arrayItems);

// $arrayItems.each ( function (){
//     //console.log(this);
//     const $currentLink = $(this).attr('href');
//     //console.log($currentLink)

//     const $thumbnailUrl = youtube.generateThumbnailUrl($currentLink);
//     // console.log (thumbnailUrl)

//     const $img = $('<img>');
//     $img.attr({
//         src: $thumbnailUrl,
//         alt: 'Youtube video thumbnail',
//     });

//     $(this).append( $img );

// });


// CAT
// // const cat = document.querySelector('.cat');
//     cat.style.position = 'absolute';
//     cat.style.left = '10px'

//     let direction = 1;

// const walkingCat = function () {
//     let currentPosition = parseInt(cat.style.left);
//     // This is the right edge of the screen
//     let rightEdge = window.innerWidth - cat.clientWidth; //this states px size
//     console.log(window.innerWidth);

//     if (currentPosition >= rightEdge - 10){

//         direction = -1;
//         // console.log(`this is running`)
//         cat.style.transform = 'scaleX(-1)'
    
//     } else if(currentPosition <= 10){

//         direction = 1;
//         cat.style.transform = 'scaleX(1)'
//     } 

//     cat.style.left = `${currentPosition + direction}px`;
//     // let screenWidth = (currentPosition).width();
//     // for (let i = 0; i < screenWidth.length; i++) {
//     //     const width = screenWidth[i];
//     // }
// };
// window.setInterval(walkingCat, 10);

// jQUERY below

const $cat = $('.cat')

$cat.css({
    position: 'absolute',
    left: '10px',
    });
    console.log($cat)    
    
    let direction = 1;

const $walkingCat = function() {
    // debugger
    let currentPosition = parseInt($cat.css('left'));
    let rightEdge = window.innerWidth - 290;

    if(currentPosition >= rightEdge - 10){
        
        direction = -1;
        // console.log(`this is running`)
        $cat.css('transform', 'scaleX(-1)')
    
    } else if(currentPosition <= 10){

        direction = 1;
        $cat.css('transform', 'scaleX(1)')
    }; 

    $cat.css('left', `${currentPosition + direction}px`);
    // console.log($cat.css('left'))

};  
    window.setInterval($walkingCat, 5);
         

    
// // KANGAROO
// const kanga = document.querySelector('.kangaroo');
//     kanga.style.position = 'absolute';
//     kanga.style.left = '10px'

//     let directionKanga = 1;

// const hoppingKanga = function () {
//     let currentPosition = parseInt(kanga.style.left);
//     // This is the right edge of the screen
//     let rightEdge = window.innerWidth - kanga.clientWidth; //this states px size
//     console.log(window.innerWidth);

//     if (currentPosition >= rightEdge - 10){

//         directionKanga = -1;
//         // console.log(`this is running`)
//         kanga.style.transform = 'scaleX(-1)';
    
//     } else if(currentPosition <= 10){

//         directionKanga = 1;
//         kanga.style.transform = 'scaleX(1)'
//     } 

//     kanga.style.left = `${currentPosition + direction}px`;
//     // let screenWidth = (currentPosition).width();
//     // for (let i = 0; i < screenWidth.length; i++) {
//     //     const width = screenWidth[i];
//     // }
// };
// window.setInterval(hoppingKanga, 5);


// // DINOSAUR
// const dino = document.querySelector('.dinosaur');
//     dino.style.position = 'absolute';
//     dino.style.left = '10px'

//     let directionDino = 1;

// const walkingDino = function () {
//     let currentPosition = parseInt(dino.style.left);
//     // This is the right edge of the screen
//     let rightEdge = window.innerWidth - dino.clientWidth; //this states px size
//     console.log(window.innerWidth);

//     if (currentPosition >= rightEdge - 1){

//         directionDino = -1;
//         // console.log(`this is running`)
//         dino.style.transform = 'scaleX(-1)';
    
//     } else if(currentPosition <= 10){

//         directionDino = 1;
//         dino.style.transform = 'scaleX(1)'
//     } 

//     dino.style.left = `${currentPosition + direction}px`;
//     // let screenWidth = (currentPosition).width();
//     // for (let i = 0; i < screenWidth.length; i++) {
//     //     const width = screenWidth[i];
//     // }
// };
// window.setInterval(walkingDino, 15);


// // MICE
// const mice = document.querySelector('.mice');
//     mice.style.position = 'absolute';
//     mice.style.left = '10px'

//     let directionMice = 1;

// const walkingMice = function () {
//     let currentPosition = parseInt(mice.style.left);
//     // This is the right edge of the screen
//     let rightEdge = window.innerWidth - mice.clientWidth; //this states px size
//     console.log(window.innerWidth);

//     if (currentPosition >= rightEdge - 10){

//         direction = -1;
//         // console.log(`this is running`)
//         mice.style.transform = 'scaleX(-1)';
    
//     } else if(currentPosition <= 10){

//         direction = 1;
//         mice.style.transform = 'scaleX(1)'
//     } 

//     mice.style.left = `${currentPosition + direction}px`;
//     // let screenWidth = (currentPosition).width();
//     // for (let i = 0; i < screenWidth.length; i++) {
//     //     const width = screenWidth[i];
//     // }
// };
// window.setInterval(walkingMice, 8);

// // MOOSE














