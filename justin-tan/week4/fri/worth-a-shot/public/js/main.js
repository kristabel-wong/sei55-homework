console.log('helo')

const warning = function() {
    $('.delete').on('click', function() {
       if (window.confirm("Are you sure you want to remove it? 100% reaaallllyy sure about deleting it?")) {
           window.alert("It will be missed!")
       } else {
           window.alert("Good choice!")
       }
    })
}

console.log(warning())