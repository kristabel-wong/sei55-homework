//Cat Walk Homework


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. - see css file

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.


// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!


const catWalk = function () {
    const catPic = document.getElementsByTagName('img')[0];// create a variable to store the img tag of the cat
    let currentLeft = parseInt(catPic.style.left);
    catPic.style.left = (currentLeft + 10) + 'px';
    if (currentLeft > (window.innerWidth - catPic.width)) {
    catPic.style.left = '0px';
        
  }
}

const startWalk = function () {
    window.setInterval(catWalk, 50);
}

startWalk()
