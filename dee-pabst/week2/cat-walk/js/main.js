console.log(`%cLet me tell thee of the days of high adventure`, 'Font-Family: fantasy; font-size: 14px;')

const cat = document.querySelector('img');
cat.style.left = "0px"
let direction = 10; // walking right

const catWalk = function(feline){
    let catPos = parseInt(cat.style.left);
    let rightEdge = window.innerWidth - 260; // width of the cat gif
    // check if we are at the edge of screen
    if(catPos >= rightEdge){
        // change direction to -10
        direction = -10;
        // flip cat gif horizontally
        cat.style.transform = "scaleX(-1)";
    } else if (catPos <= -50 ){
        // change direction to +10
        direction = 10;
        // flip cat image back to original direction
        cat.style.transform = "";
    }
    // happy with direction - keep walking
    cat.style.left = `${catPos + direction}px`;    
}

const stopCat = window.setInterval(catWalk, 50);

