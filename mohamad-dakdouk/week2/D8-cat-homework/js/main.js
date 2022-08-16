// The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.



//     Create a new Javascript file and link to it with a script tag at the bottom.

//<--- COMPLETE ----->>> ///

//     Create a variable to store a reference to the img.

const catTag = document.querySelector("img");

catTag.style.opacity = 0.9;

//     Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// catTag.style.left = `100px`;
// catTag.style.position = `relative`;

catTag.style.left = `20px`;
catTag.style.top = `20px`;
//     Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

const catWalk = function (){
  
  //parseInt turns the string into a number
  let currentLeft = parseInt(catTag.style.left);
  let currentTop = parseInt(catTag.style.top);
  catTag.style.left = `${currentLeft+1}px`;
  catTag.style.top = `${currentTop +1}px`;
  // screenWidth = $(window).width();

console.log(window.innerWidth);
console.log(catTag.style.left)
  // window.innerWidth 
  // below to work on...
// need to flip the direction not just (-)
  // comparing a string to a value 
  if (currentLeft >= window.innerWidth-300){
    // catTag.style.tranform = "relative";
    // catTag.style.transform = "scaleX(-1)";
    catTag.style.left = `${currentLeft-1}px`;
    catTag.style.top = `${currentTop -1}px`

  };

  // if(catTag.style.left === `500`){
  //   catTag.styl
  //   currentLeft= `0px`;
  //   currentTop = `0px`;
  // } else{
  //   catTag.style.left =`${currentLeft +2}px`;
  //   catTag.style.top = `${currentTop + 2}px`;
  // };
};

// const fadeID = setInterval(catWalk, 10);


window.setInterval(catWalk, 10);



// const catWalk = function (){
//   // const currentLeft = parseInt(catTag.style.left);
//   // const currentTop = parseInt(catTag.style.top);
//   var pos =0;
//   clearInterval(img);
//   img = setInterval(frame, 10);
//   function frame(){
//     if (pos == 350){
//       clearInterval(id);
//     } else 
//       pos++;
//       catTag.style.left= pos + `px`;
//       catTag.style.top = pos + `px`;
//     };
//   };
//   };
// catWalk();
// frame();
  // catTag.style.left = `${cLeft+ 10}px`;

  // }
 
   // catTag.style.left = `${cLeft+ 10}px`;
  // catTag.style.left = `${cTop+ 10}px`;
  // // if ( cTop < `500px`){
  // //   cTop = `${cTop + 2}px`;
  //   cLeft = `${cLeft + 2}px`;
  // } else(){
  //   cTop = `${cTop - 2}px`;
  //   cLeft = `${cLeft - 2}px`;

  
// if (currentLeft <= `100px`){
    
  // } else ( currentLeft === `0px`){

  // }




//     Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//     Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.



// const fadeAway = function (){
//   const currentLeft = parseInt(catTag.style.left);
//   catTag.style.left = `${currentLeft =2}px`
// }
// // catTag.style.position = `relative`;




// Why is my fade not working in this function?

// const fadeAway = function(){
//   catTag.style.opacity = catTag.style.opacity - 0.02;
// };

// window.setInterval(fade, 10);

// console.log(`hi`);





//     Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

//     Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

//     Bonus #4: Pretty much go nuts or whatever.


// window.setInterval(function() {
//   console.log(`boo`);
// }, 3000);

// window.clearInterval(10);
