// console.log("Hi");
const allLinkTags = document.querySelectorAll('a');
console.log(allLinkTags);

for (let i = 0; i < 3; i++) {
    const currentLink = allLinkTags[i];
    const thumbnailUrl = youtube.generateThumbnailUrl( currentLink.href);
    console.log(thumbnailUrl);
    const newImgTag = document.createElement('img');
    newImgTag.src = thumbnailUrl;
    newImgTag.alt = "YouTube video thumbnail";
    currentLink.appendChild( newImgTag );
    
}


