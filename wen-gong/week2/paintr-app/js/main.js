console.log('Printr')
let drawCount = 0;

let lastMouseX = 0;

const drawCircle = function( x, y){
  
  const $circle = $('<div class="circle">');

  const mouseXSpeed = x - lastMouseX;

  const circleSize = Math.abs(mouseXSpeed) * 2;
  // const circleSize = 50;
  // const r = Math.random()*256;
  // const g = Math.random()*256;
  // const b = Math.random()*256;

  drawCount++;

  $circle.css({
    backgroundColor: `hsla(${drawCount}, 100%, 50%, 0.5)`,
    // backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,

    width: `${circleSize}px`,
    height: `${circleSize}px`,
    top: `${y - circleSize/2}px`,
    left: `${x - circleSize/2}px`,

      
  });

  $(document.body).append( $circle );
  
  //  $circle.animate(
  //   {
  //     opacity:0,
  //     // top: `${- circleSize}px`
  //     top: window.innerHeight
      
  //  }, 
  //  2000, 
  //  function(){
  //     $(this).remove();
  //  });

  
};

  $(document).on('mousemove', function(event){
     
    const xPos = event.originalEvent.clientX;
    const yPos = event.originalEvent.clientY;
    // console.log(event.originalEvent.clientX, event.originalEvent.clientY );

    if (event.originalEvent.shiftKey ) {
      drawCircle(xPos, yPos);
     
      
      
      
    } ;
    
    
    // $(document).on('keypress', function(){
    //   if (event.originalEvent.spaceKey) {
    //     $(document.body).remove();  
    //   }
      
    // });
   

    lastMouseX = xPos;
  });

  $(document).on('keypress', function(event){

    if (event.originalEvent.spaceKey){
      $(document.body).hide();
   };
   
  })
  












