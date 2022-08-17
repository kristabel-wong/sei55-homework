

// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.


// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.


// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
const walk = document.querySelector('img');

const Walk = $('img')
walk.style.position = 'relative';
walk.style.left = '0px';
direction = 10;


const catWalk = function(){
    const currentLeft = parseInt(walk.style.left);
    
    rightEdge = window.innerWidth - 296;
    if(currentLeft >= rightEdge){;
        direction = -10
       walk.style.transform = "scaleX(-1)";
      
       
    }else if(currentLeft <= -50) {
        direction = 10;
        walk.style.transform = "";
       
    }
    
    walk.style.left = `${currentLeft + direction}px`
    
};

window.setInterval(catWalk, 50);



