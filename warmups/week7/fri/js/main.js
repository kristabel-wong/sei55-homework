
// let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
// parseQueryString(url)

// returns the following

// {
//   t: "jaws",
//   apikey: "123456",
//   page: "5"
// }


const parseQueryString = function( url ) {
    // create a substring --> we want this info "t=jaws&apikey=123456&page=5"
    let info = url.substring(url.indexOf("?")+1);
    console.log(info);
    
    // split this out - into an array 
    let infoArr = info.split("&");
    console.log(infoArr);
    

    // storing information in an object
    let obj = {}

    // loop through the array and add the key value pairs
    for (let i = 0; i < infoArr.length; i++ ) {
        let key = infoArr[i].substring(0, infoArr[i].indexOf("="));
        let value = infoArr[i].substring(infoArr[i].indexOf("=")+1);

        obj[key] = value;
    }

    return obj
}

let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
let url2 = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10"
console.log(parseQueryString(url));
console.log(parseQueryString(url2));