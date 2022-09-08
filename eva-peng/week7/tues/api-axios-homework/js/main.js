const lookupName = function(name){
    axios.get(`http://api.citybik.es/v2/networks?field=name`)
    .then(
        function(res){
        data = res.data.networks 
        $('#results')
            .empty()
            .append(`
            <p>Here are cities that provide CityBike ${name}</p>`) 
        for (let i = 0; i < data.length; i++) {
            if (name == data[i].name){
            $('#results')
            
            .append(`
            <ul><li>${data[i].location.city}</li></ul>
            `)
            } //if
        }   // for loop                     
        })
        .catch(function(err){
            console.error('something went wrong', err);
            
        })

}

// codes didn't work
// const getApiData = async function(){

//     // async/await makes asc JS code look like synchronous 
//     // ruby code!
//     try{
        
//     const res = await axios.get(`http://api.citybik.es/v2/networks?field=${name}`)
//     data = res.networks
//     const lookupName = function(name)
//     for (let i = 0; i < data.length; i++) {
//         $('#results')
        
//         .append(`<ul><h4>${data[i].location.city}</h4></ul>`)





//     } // for loop

//     } catch(err){
//         console.log('something went wrong!', err);
        
//     }
    
    
// }; //getApiData

$(function(){
    $('#submitButton').on('click', function(){

        const userSearch = $('#searchQuery').val();

        lookupName(userSearch);
    });
})