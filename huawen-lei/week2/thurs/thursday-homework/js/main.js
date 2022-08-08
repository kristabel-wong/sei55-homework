
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

// const walk = document.querySelector('img');

// walk.style.position = 'relative';
// walk.style.left = '0px';
// let direction = true;


// const catWalk = function(){
//     const currentLeft = parseInt(walk.style.left);
//     console.log(currentLeft);

//     if(direction){
//         walk.style.transform = 'scaleX(1)';
//         walk.style.left = `${currentLeft + 10}px`
//         if(currentLeft >= window.innerWidth){
//             direction = false;
//         }
//     }else {
//         walk.style.transform = 'scaleX(-1)';
//         walk.style.left = `${currentLeft - 10}px`
//         if(currentLeft <= 0){
//             direction = true;
//         }
//     }
// };

// window.setInterval(catWalk, 50);


/* --------------- jQuery --------------- */
// const $catImg = $('.walkCat');

// $catImg.css({
//     position: 'relative',
//     left: '0px'
// });

// let $direction = true;

// const catWalk = function(){
//     const $currentLeft = parseInt($catImg.css("left"));
//     console.log($currentLeft);

//     if($direction){
//         $catImg.css({
//         transform: 'scaleX(1)',
//         left: `${$currentLeft + 10}px`
//         });
//         if($currentLeft >= window.innerWidth){
//             $direction = false;
//         }
//     } else{
//         $catImg.css({
//             transform: 'scaleX(-1)',
//             left: `${$currentLeft - 10}px`
//         });
//         if($currentLeft <= -300){
//             $direction = true;
//         }
//     }
// };

// window.setInterval(catWalk, 50)



// /* --------------- jQuery Bonus Three error version --------------- */
// // the fault place is that when I set the currentleft to the middle, I didn't stop the walking version, 
// // I just make the walking graph opacity to 0, so the currentleft keep increasing and decreasing all the time
// // It leads to it would run else if($currentLeft === middle) multiple times and have bugs

// // So my next version would add a clearInterval when it reaches the middle position
// // also learn from Daniel the tips to ensure the middle step is 10

// console.log(window.innerWidth);

// const $catImg = $('.walkCat');
// const $catDance = $('.danceCat');

// $catDance.css({
//     opacity: '0',
//     position: 'relative',
//     left: `{window.innerWidth / 2}px`
// });

// $catImg.css({
//     position: 'relative',
//     left: '0px'
// });

// let $direction = true;
// const middle = Math.ceil(window.innerWidth / 2 / 10) * 10;

// const catWalk = function(){
//     let $currentLeft = parseInt($catImg.css("left"));
//     // console.log($currentLeft);

//     if($direction){
//         $catImg.css({
//         transform: 'scaleX(1)',
//         left: `${$currentLeft + 10}px`
//         });
//         if($currentLeft >= window.innerWidth){
//             $direction = false;
//         }
//         else if($currentLeft === middle){
//             $catImg.css({'opacity': '0'});
//             $catDance.css({
//                 opacity: '1',
//                 left: `${$currentLeft}px`
//             });
//             window.setTimeout(function(){
//                 $catImg.css({
//                     opacity: '1',
//                     left : `${middle + 10}px`
//                 });
//                 $catDance.css({'opacity': '0'});
//                 $currentLeft = parseInt($catImg.css("left"));
//                 $direction = true;
//             },10000);
//             console.log($currentLeft);
//         }
//     } else{
//         $catImg.css({
//             transform: 'scaleX(-1)',
//             left: `${$currentLeft - 10}px`
//         });
//         if($currentLeft <= -300){
//             $direction = true;
//         }
//         else if($currentLeft === middle){
//             $catImg.css({'opacity': '0'});
//             $catDance.css({
//                 opacity: '1',
//                 left: `${$currentLeft}px`
//             });
//             window.setTimeout(function(){
//                 $catImg.css({
//                     opacity: '1',
//                     left : `${middle - 10}px`
//                 });
//                 $catDance.css({'opacity': '0'});
//                 $currentLeft = parseInt($catImg.css("left"));
//                 $direction = false;
//             },10000);
//             console.log($currentLeft);
//         }
//     }
// };

// window.setInterval(catWalk, 50)




/* --------------- jQuery Bonus Three fix the bug version --------------- */
// the fault place is that when I set the currentleft to the middle, I didn't stop the walking version, 
// I just make the walking graph opacity to 0, so the currentleft keep increasing and decreasing all the time
// It leads to it would run else if($currentLeft === middle) multiple times and have bugs

// So this version I add a clearInterval when it reaches the middle position
// also learn from Daniel the tips to ensure the middle is the step of 10


const $catWalkImg = $('.walkCat');
const $catDance = $('.danceCat');

// set initial from left to right
let $isRight = true;
let $walkID
let $backColorID
// to make sure walk cat won't disappear and in the middle position
const $totalDistance = window.innerWidth - parseInt($catWalkImg.css('width'));
// console.log($totalDistance); //for checking

// ensure the middle is the step of 10
const $middle = Math.ceil($totalDistance / 2 / 10) * 10;
// console.log($middle); //for checking

//to make the dance cat show in the middle
const $middleDance = $middle - parseInt($catDance.css('width'));


$catDance.css({
    opacity: '0',
    position: 'relative',
    left: `{$totalDistance / 2}px`
});

$catWalkImg.css({
    position: 'relative',
    left: '0px'
});

const changeColor = function(){
    // const $r = Math.floor(Math.random() * 256);
    // const $g = Math.floor(Math.random() * 256);
    // const $b = Math.floor(Math.random() * 256);

    // return $('body').css('background-color', 'rgb($r, $g, $b)');

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
}; //changeColor()


const catWalk = function(){

    //value of the current left position
    let $currentLeft = parseInt($catWalkImg.css("left"));
    // console.log('start:', $currentLeft); //for checking

    //if walk from left to right, isRight = true
    if($isRight){
        $catWalkImg.css({
        transform: 'scaleX(1)',
        left: `${$currentLeft + 10}px`
        });
        //if reach the right edge, walk from right to left, isRight = false
        if($currentLeft >= $totalDistance){
            $isRight = false;
        }
        //if get to the middle, change the dancing cat
        else if($currentLeft === $middle){
            //when get to middle, for 10s, set the walking cat opacity = 0, dance cat opacity = 1
            $catWalkImg.css({'opacity': '0'});

            $catDance.css({
                opacity: '1',
                left: `${$middleDance}px`
            });

            window.clearInterval($walkID);

            //change background color
            $backColorID = window.setInterval(changeColor,500);

            //the situation after 10s
            window.setTimeout(function(){
                $catWalkImg.css({
                    opacity: '1',
                    left : `${$middle}px`
                });

                $catDance.css({'opacity': '0'});

                // make it walk again
                $walkID = window.setInterval(catWalk, 50);

                window.clearInterval($backColorID);
                $('body').css('background-color', 'white');

                // make the walking cat walk to the next position
                //put it inside the setTimeout function because it runs after the timeout
                $catWalkImg.css('left', `${$currentLeft + 10}px`);
                // console.log('walkagain', $currentLeft); //for checking
            },10000);
        }

    } 
    else{ //if walk from right to left, isRight = false
        $catWalkImg.css({
            transform: 'scaleX(-1)',
            left: `${$currentLeft - 10}px`
        });
        if($currentLeft <= 0){
            $isRight = true;
        }
        else if($currentLeft === $middle){
            //when get to middle, for 10s, set the walking cat opacity = 0, dance cat opacity = 1
            $catWalkImg.css({'opacity': '0'});

            $catDance.css({
                opacity: '1',
                left: `${$middleDance}px`
            });

            window.clearInterval($walkID);

             //change background color
             $backColorID = window.setInterval(changeColor,500);

            //the situation after 10s
            window.setTimeout(function(){
                $catWalkImg.css({
                    opacity: '1',
                    left : `${$middle}px`
                });

                $catDance.css({'opacity': '0'});

                // make it walk again
                $walkID = window.setInterval(catWalk, 50);

                window.clearInterval($backColorID);
                $('body').css('background-color', 'white');

                // make the walking cat walk to the next position
                //put it inside the setTimeout function because it runs after the timeout
                $catWalkImg.css('left', `${$currentLeft - 10}px`);
                // console.log('walkagain', $currentLeft); //for checking
            },10000);
        }
    }
};

$walkID = window.setInterval(catWalk, 50)








