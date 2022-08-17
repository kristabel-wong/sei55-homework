// console.log(`loaded`)

// const linkArray = document.querySelectorAll('a');
// console.log(linkArray)


// for (let i = 0; i < linkArray.length; i++) {
//     const img = document.createElement('img');
//     // console.log(linkArray[i].href)

//     const hrefLink = linkArray[i].href;
//     const thumbnail = youtube.generateThumbnailUrl(hrefLink);
//     // console.log(thumbnail)

//     img.src = thumbnail

//     console.log(img)
//     linkArray[i].appendChild(img);

// }

const $linkArray = $('a');

$linkArray.each( function() {
    const $img = $('<img>');
    const $hrefLink = $(this).attr('href')
    // console.log($hrefLink);

    const $thumbnail = youtube.generateThumbnailUrl($hrefLink);
    // console.log($thumbnail)

    $img.attr({
        src: $thumbnail,
        alt: 'Youtube video thumbnail'
    });
    console.log($img)

    $(this).attr('target', '_blank');
    
    $(this).append( $img );

});