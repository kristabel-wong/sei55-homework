console.log('Mic check');

const getApiData = async function() {
    try {
        const res = await axios.get("https://x-colors.herokuapp.com/api/random")
        
        return res.data.hex;
        
    }
     catch (err) {
        console.log('There\'s been an error' , err);

    }
    
}

const  createScreen = () =>{
    $(function(){
        for (let i = 0; i < 32; i++) {
            
        getApiData().then((color) => { 
            $('body').append(`<div class='box' style="background-color:${color}"><p>${color}</p</div>`)
            });
        }
        
        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title"  style="color:${color}">S</h1> </div>`)
            });

        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title"  style="color:${color}">W</h1></div>`)
            });

        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title"  style="color:${color}">A</h1></div>`)
            });
            
        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title"  style="color:${color}">T</h1></div>`)
            });

        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title" style="color:${color}">C</h1></div>`)
            });
        
        getApiData().then((color) => { 
            $('body').append(`<div class='box'> <h1 class="title"  style="color:${color}">H</h1></div>`)
            });

        for (let i = 0; i < 32; i++) {
            
        getApiData().then((color) => { 
            $('body').append(`<div class='box' style="background-color:${color}"><p>${color}</p</div>`)
            });
           
        }
        

    
    })
    
            
        
        
    
    
    
}

createScreen()
    
    
const changer = () => {
    $(function() {
    $('p').on('click', function(e){

        console.log('Clicked');
        const originalColor = $(e.target).text().substring(1)
        console.log(originalColor);

        $.when(convertColor(originalColor)).then((newColor) => {
            console.log(newColor);
            $(e.target).text(newColor)
        }); 
                 
           
    
    });
});
}


setTimeout(changer, 7000)


    
    
const convertColor = async function( text ) {
    try {
        const res = await axios.get(`https://x-colors.herokuapp.com/api/hex2rgb?value=${text}`)
        
        return res.rgb
        
    }
     catch (err) {
        console.log('There\'s been an error' , err);

    }
    
}