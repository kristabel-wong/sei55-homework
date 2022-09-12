console.log(`hello`)

document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.querySelector('#nickname');
nickname.innerText = "JustinTan";
console.log(nickname)

const favorites = document.querySelector('#favorites');
favorites.innerText = "Video games";

const hometown = document.querySelector('#hometown');
hometown.innerText = "Malaysia";

const lists = document.querySelectorAll('li');
for (let i = 0; i < lists.length; i++ ) {
    lists[i].className = "listitem";
    lists[i].style.color = "red"
}

const img = document.createElement('img');
img.src = "http://placekitten.com/200/300";
img.alt = "A cute kitty";
console.log(img)
document.body.appendChild(img);


// const listitem = document.querySelectorAll('.listitem');
// listitem.style.color = "red";


nickname.addEventListener('click', function(){
    console.log(`nickname clicked`)
});

const heading = document.querySelector('h1');

heading.addEventListener('click', function() {
    console.log(`heading clicked`)
})


// const bill = document.querySelector("img");
// bill.style.position = 'relative';
// bill.style.left = '0px'

// const fadeAway = function () {
//     const currentLeft = parseInt(bill.style.left);
// 	bill.style.left = `${currentLeft + 2}px`
// };

// window.setInterval(fadeAway, 10);