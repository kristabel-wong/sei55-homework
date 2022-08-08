// console.log(`Events ready!`)

const kitty1 = document.querySelector('.triple-kitty1')
kitty1.style.visibility = 'visible'



$(window).on('resize', function() {
    console.log(`window resizing`)
}) 


// $('li').on('click', function() {
//     $(this).css('border', '10px solid red')
// })  // using $(this) only select the one you click and apply the function

// $('#kitty').on('mouseenter', function() {
//     console.log('mouse entered!')
// }) 

$('#kitty').on('click', function(event) {
    console.log(`event object:`, event)
}) 



$(document).on('scroll', function() {
    console.log('mouse entered!')
}) 

// $('input[type="text"]').on('keypress', function()  {
//     console.log(`print!`)
//     $(this).css('background','red')
// })

$('input[type="text"]').on('keyup', function(event)  {
    console.log(`print!`, event.target.value)
    // $(this).css('background','red')
})



$('input[type="text"]').on('focus', function()  {
    $(this).css('background','red')

} )

$('input[type="text"]').on('blur', function()  {
    $(this).css('background','blue')
} )

$('select').on('change', function(event)  {
    console.log(`dropped down`, event.target.value);
} )

$('form').on('submit', function()  {
    console.log(`Form submitted!`);
} )


$('#toggle').on('click', function()  {
    $('.triple-kitty1').toggle();
} )

$('#fade').on('click', function()  {
    $('.triple-kitty2').slideToggle(); //or fadeToggle
} )

$('#show h2').on('click', function () {
    $('.triple-kitty3').show();
})
