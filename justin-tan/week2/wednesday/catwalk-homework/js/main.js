console.log(`hello`)

const elem = document.querySelector('div')
const screen = elem.getBoundingClientRect();
console.log(screen)



const catGif = document.querySelector('img');

catGif.style.position = "relative";
catGif.style.transform = "scaleX()";
catGif.style.left = "0%";


let catDirection = "right";

const catWalk = function () {

    const catGifLeft = parseInt(catGif.style.left);
    

    if (catDirection === "right") {

        if (catGifLeft < 80) {
            catGif.style.left = `${catGifLeft + 1}%`
        } else {
            catGif.style.transform = "scaleX(1)";
            catDirection = "left"
        }

    } else if (catDirection === "left") {
        
        if (catGifLeft > 0) {
            catGif.style.left = `${catGifLeft - 1}%`
        } 
        else {
            catGif.style.transform = "scaleX(-1)"
            catDirection = "right"
        }

    }

}

const fadeID = setInterval(catWalk, 10);