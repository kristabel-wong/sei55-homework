
console.log('Cat Walking');

/* ------------- Bonus One ----------- */

// const walk = document.querySelector('img');

// walk.style.position = 'relative';
// walk.style.left = '0px';

// const catWalk = function(){
//     const currentLeft = parseInt(walk.style.left);
//     walk.style.left = `${currentLeft + 10}px`;

//     if (currentLeft > window.innerWidth){
//         walk.style.left = `0px`;
//     }
// };

// window.setInterval(catWalk, 50);



/* ------------- Bonus Two ----------- */

const walk = document.querySelector('img');

walk.style.position = 'relative';
walk.style.left = '0px';
let direction = true;


const catWalk = function(){
    const currentLeft = parseInt(walk.style.left);
    console.log(currentLeft);

    if(direction){
        walk.style.transform = 'scaleX(1)';
        walk.style.left = `${currentLeft + 10}px`
        if(currentLeft >= window.innerWidth){
            direction = false;
        }
    }else {
        walk.style.transform = 'scaleX(-1)';
        walk.style.left = `${currentLeft - 10}px`
        if(currentLeft <= 0){
            direction = true;
        }
    }
};

window.setInterval(catWalk, 50);


