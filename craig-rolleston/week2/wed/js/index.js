
// CAT
const cat = document.querySelector('.cat');
    cat.style.position = 'absolute';
    cat.style.left = '10px'

    let direction = 1;

const walkingCat = function () {
    
    let currentPosition = parseInt(cat.style.left);
    // This is the right edge of the screen
    let rightEdge = window.innerWidth - cat.clientWidth; //this states px size
    // console.log(window.innerWidth);

    if (currentPosition >= rightEdge - 10){
    
        direction = -1;
        // console.log(`this is running`)
        cat.style.transform = 'scaleX(-1)'
    
    } else if(currentPosition <= 10){
        
        direction = 1;
        cat.style.transform = 'scaleX(1)'
    } 

    cat.style.left = `${currentPosition + direction}px`;
    // let screenWidth = (currentPosition).width();
    // for (let i = 0; i < screenWidth.length; i++) {
    //     const width = screenWidth[i];
    // }
};
window.setInterval(walkingCat, 10);


// KANGAROO
const kanga = document.querySelector('.kangaroo');
    kanga.style.position = 'absolute';
    kanga.style.left = '10px'

    let directionKanga = 1;

const hoppingKanga = function () {
    let currentPosition = parseInt(kanga.style.left);
    // This is the right edge of the screen
    let rightEdge = window.innerWidth - kanga.clientWidth; //this states px size
    // console.log(window.innerWidth, rightEdge);

    console.log(currentPosition, rightEdge, currentPosition >= rightEdge - 10)
    if (currentPosition >= rightEdge - 10){
        console.log('right edge')
        directionKanga = -1;
        // console.log(`this is running`)
        kanga.style.transform = 'scaleX(-1)';
    
    } else if(currentPosition <= 10){
        console.log('left edge')
        directionKanga = 1;
        kanga.style.transform = 'scaleX(1)'
    } 

    kanga.style.left = `${currentPosition + directionKanga}px`;
    // let screenWidth = (currentPosition).width();
    // for (let i = 0; i < screenWidth.length; i++) {
    //     const width = screenWidth[i];
    // }
};
window.setInterval(hoppingKanga, 5);


// DINOSAUR
const dino = document.querySelector('.dinosaur');
    dino.style.position = 'absolute';
    dino.style.left = '10px'

    let directionDino = 1;

const walkingDino = function () {
    let currentPosition = parseInt(dino.style.left);
    // This is the right edge of the screen
    let rightEdge = window.innerWidth - dino.clientWidth; //this states px size
    // console.log(window.innerWidth);

    if (currentPosition >= rightEdge - 1){

        directionDino = -1;
        // console.log(`this is running`)
        dino.style.transform = 'scaleX(-1)';
    
    } else if(currentPosition <= 10){

        directionDino = 1;
        dino.style.transform = 'scaleX(1)'
    } 

    dino.style.left = `${currentPosition + directionDino}px`;
    // let screenWidth = (currentPosition).width();
    // for (let i = 0; i < screenWidth.length; i++) {
    //     const width = screenWidth[i];
    // }
};
window.setInterval(walkingDino, 15);


// MICE
const mice = document.querySelector('.mice');
    mice.style.position = 'absolute';
    mice.style.left = '10px'

    let directionMice = 1;

const walkingMice = function () {
    let currentPosition = parseInt(mice.style.left);
    // This is the right edge of the screen
    let rightEdge = window.innerWidth - mice.clientWidth; //this states px size
    // console.log(window.innerWidth);

    if (currentPosition >= rightEdge - 10){

        directionMice = -1;
        // console.log(`this is running`)
        mice.style.transform = 'scaleX(-1)';
    
    } else if(currentPosition <= 10){

        directionMice = 1;
        mice.style.transform = 'scaleX(1)'
    } 

    mice.style.left = `${currentPosition + directionMice}px`;
    // let screenWidth = (currentPosition).width();
    // for (let i = 0; i < screenWidth.length; i++) {
    //     const width = screenWidth[i];
    // }
};
window.setInterval(walkingMice, 8);

// MOOSE