const mainCatGif = document.querySelector('img');

// mainCatGif.style.position = 'relative';
mainCatGif.style.left = 0 ;
mainCatGif.style.transform = 'scaleX(1)';
// mainCatGif.style.position = 'bottom';

const moveFromLeft = function ( ) {

    const currentFromLeft = parseInt(mainCatGif.style.left);
    mainCatGif.style.left = `${currentFromLeft+1}%`;

    if (currentFromLeft > 80) {
        clearInterval(moveFromLeftId);
        mainCatGif.style.transform = 'scaleX(-1)';
        console.log(moveFromLeftId)
        moveFromRightId = window.setInterval(moveFromRight, 25);
        
        

    };

    console.log(currentFromLeft)
}
let moveFromLeftId = window.setInterval(moveFromLeft, 25);


const moveFromRight = function ( ) {

    const currentFromRight = parseInt(mainCatGif.style.left);
    mainCatGif.style.left = `${currentFromRight-0.5}%`;

    if ( currentFromRight <= 1 ) {
        clearInterval(moveFromRightId);
        mainCatGif.style.transform = 'scaleX(1)'
        console.log(moveFromRightId)
        moveFromLeftId = window.setInterval(moveFromLeft, 25);

    }

    console.log(currentFromRight)
}
let moveFromRightId = 0

