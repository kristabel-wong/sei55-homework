console.log(`helo`)


//PSEUDOCODE:
//
//1. When the user moves the mouse around, 
//2. draw a coloured circle at that mouse position.

    //2a. get the mouse position for the latest move event
    //2b. create a <div> and add it to the DOM at that position
    //2c. use CSS to style up the dive to look like a colored circle

let drawCount = 0; // for hue color cycling

let lastMouseX = 0; //for calculating speed

const drawCircle = function ( x, y ) {
    
    const $circle = $(' <div class="circle"> ');

    const mouseXSpeed = x - lastMouseX;
    console.log(`speed:`, mouseXSpeed)

    // const circleSize = Math.random() * 300;

    const circleSize = Math.abs(mouseXSpeed) * 5; //negative values not allowed as width/height by CSS

    // The circle size is proportional to the SPEED of mouse movement?

    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;

    drawCount++;

    // HSL - hue, saturation, lightness
    // hsl(0-360, 100%, 50%)

    $circle.css({

        backgroundColor: `hsla(${drawCount}, 100%, 50%, 0.5)`,
        // backgroundColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        top: `${y - circleSize/2}px`,
        left: `${x - circleSize/2}px`

    }); //.css()

    $(document.body).append( $circle );

    $circle.animate(
        {
            opacity: 0,
            // top: `${-circleSize}px`
            top: window.innerHeight

        }, 
        2000, 
        function(){
            $(this).remove(); //delete from DOM when no longer visible
    })

} // drawCircle


//DOM ready handler? maybe not if we attach our mousemove hander to the ever-present 'document' object

$(document).on('mousemove', function( event ) {

    const xPos = event.originalEvent.clientX;
    const yPos = event.originalEvent.clientY;

    // only draw a circle if the shift key is held down
    //i.e. we can life the pen
    if ( event.originalEvent.shiftKey === true ) {
        drawCircle( xPos, yPos );   
    }

    lastMouseX = xPos; // save for next time

    //drawCircle function here

}); // mousemove handler