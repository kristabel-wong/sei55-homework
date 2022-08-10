$('#grace_times').one( 'mouseenter', function(){
    
    $('.intro h1').fadeOut( 4000, function() {

        $('#coverButton').fadeIn( 4000 )
    })

});

$('#coverButton').on('click', function(){

    $('#coverButton').fadeOut(500);

    $('#grace_times').fadeOut(4000);

});

const buttonsClicked = [
    false,
    false,
    false,
    false,
    false,
    false
]

// eventListener for frontCoverImage vis=0
if ($('#grace_times').css('dipslay', 'none') ) {
    
    //  reposition .flex appropriately
    $('.flex').css({
        
        'left'          : '1rem',

    })// closes .flex reposition

    //  determine .css on .flex
    $('.flex').on( 'click', function(){

        // .css changes for OTHER .flex
        $('.flex').css({

            'width':'0.25rem',
            'margin':'0rem'
        
        })// closes $('.flex').on(-
        
        // .css changes for the font within the clicked box
        $('.fun_facts' , this).css({

            'visibility'    : 'visible',
            'color'         : 'white',
            'font-weight'   : 'bold', 
            
            
        })// closes $('.fun_facts', this-
        
        // .css changes for CLICKED flex box
        $(this).show ( 500, function(){
            $(this).css({
                width : '50rem',
                height : '60rem',
                flexShrink: '0 auto',
                fontSize : '30px',
                opacity :   '0.9'

            });// closes .css object
            
            let flexPosition = $(this).css('order')-1 ;
            buttonsClicked[flexPosition] = true;
            

        })// closes show function

        

    //------------------------------------------------------------

        // eventListner for mouseleave on CLICKED .flex
        $('.flex').on( 'mouseleave', function(){
            if (buttonsClicked[0] === true &&
                buttonsClicked[1] === true &&
                buttonsClicked[2] === true &&
                buttonsClicked[3] === true &&
                buttonsClicked[4] === true &&
                buttonsClicked[5] === true ){
                    console.log('got here');

                    // change .css of video 
                    $('.flex_fun').fadeOut( 1000 , function(){
                        $('#firstOne').show()

                    })

                }


            // .css changes to other .flex on mouseleave 
            $('.flex').css({
                'width'     :'5rem',
                'height'    :'50rem',
                'margin'    :'1rem'
            })// closes $('.flex').css-
            
            // animates .css changes to this .flex on mouseleave
            $(this).animate ({
                height      : '50rem',
                width       : '1rem',
                fontSize    : '15px',
                opacity     : '0.4'
        
            }, 300) // closes $(this).animate-

            // changes visibility of all font
            $('.fun_facts').css('visibility', 'hidden')

            
            
        })// closes eventListener for mouseleave clicked .flex

    });// closes $('.flex').on('click',func-)

    // eventListner for 'click' on .flex buttons
    $('.flexBoxButton').on('click', function(){


        // checks if all .flex opacity === 0.4
        if ( $('.flex').css('opacity') === '0.4' ) {
            


    
        }// closes opacity(0.4) if condition
    
    
    })// closes .flex buttons eventListener


}// closes eventListener for frontCoverImage vis=0
