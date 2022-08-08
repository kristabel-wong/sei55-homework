console.log("the cat walk")



    // Create a new Javascript file and link to it with a script tag at the bottom. DONE


    // Create a variable to store a reference to the img.
    const cat = document.querySelector("img")
    console.log(cat);

    // Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
    cat.style.display = "block";
    cat.style.left = "0%";
    cat.style["margin-top"] = "0%";
    cat.style.width = "15%";
    // cat.style.transform = "scaleX(-1)"

    // Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

    // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

    
    const catWalkInLoop = function(){
        const currentLeft = parseInt(cat.style.left);//so current left is 0 from screen
        if (currentLeft < 100) {
            cat.style.left = `${currentLeft +1}%`;   
        } else {
            // window.clearInterval(catInterval); this is to let cat stop at right
            cat.style.left = "-15%"; // this is to make cat start at 0
            
        }
        
    };
    
    // Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
    const catWalkToRight = function(){
        const currentLeft = parseInt(cat.style.left);//so current left is 0 from screen
        // const turnRight = parseInt(cat.style.transform); 
        // console.log(turnRight)
        if (currentLeft < 85) { //if 0<85
            cat.style.left = `${currentLeft +1}%`; // result is 1   
        } else {
            cat.style.transform = "scaleX(-1)"
            // cat.style.left = "0"; // this is to make cat start at 0
        }
    };

    const catWalkToLeft = function (){
        const currentLeft = parseInt(cat.style.left);
        cat.style.transform = "scaleX(-1)"
        if (currentLeft > 0 ) {
            cat.style.left = `${currentLeft -1}%`;
        } 
            
    };


let directionCatTravelling = "right"
const meowTime = function() {
    const currentLeft = parseInt(cat.style.left);

    if (directionCatTravelling === "right") {
        if (currentLeft < 85) { //if 0<85
            cat.style.left = `${currentLeft +1}%`; // result is 1   
        } else {
            cat.style.transform = "scaleX(1)"
            directionCatTravelling = "left"
        }
    } else if (directionCatTravelling === "left") {
        if (currentLeft > 0 ) {
            cat.style.left = `${currentLeft -1}%`;
        }
        else {
            cat.style.transform = "scaleX(-1)"
            directionCatTravelling = "right"
        }
    }
}





let catHorizontalDirection = "right"
let catVerticalDirection = "down"
const meowMeowTime = function() {
    const currentLeft = parseInt(cat.style.left);
    const currentTop = parseInt(cat.style["margin-top"]);

    if (catHorizontalDirection === "right") {
        if (currentLeft < 85) { //if 0<85
            cat.style.left = `${currentLeft +1}%`; // result is 1   
        } else {
            cat.style.transform = "scaleX(-1)"
            catHorizontalDirection = "left"
        }
    } else if (catHorizontalDirection === "left") {
        if (currentLeft > 0 ) {
            cat.style.left = `${currentLeft -1}%`;
        }
        else {
            cat.style.transform = "scaleX(1)"
            catHorizontalDirection = "right"
        }
    }

    if (catVerticalDirection === "down") {
        if (currentTop < 30) { //if 0<85
            cat.style["margin-top"] = `${currentTop +1}%`; // result is 1   
        } else {
            catVerticalDirection = "up"
        }
    } else if (catVerticalDirection === "up") {
        if (currentTop > 0 ) {
            cat.style["margin-top"] = `${currentTop -1}%`;
        }
        else {
            catVerticalDirection = "down"
        }
    }
}


    // Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
    
    const catInterval = window.setInterval(meowTime,50);
    //setInterval is a function that repeats a function in every xx ms. 


    // Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.


    // Bonus #4: Pretty much go nuts or whatever.
     

   








