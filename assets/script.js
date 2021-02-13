/* dom elements references */
const buttonRef = document.querySelectorAll('button');
const imgRef = document.querySelectorAll('.image-wrapper img');

/* url */
const fields = 'id, caption, media_url';
const accessToken = 'IGQVJYLWIxbUtQaXFkT3hfaXBHOVUxRlozQUJLWnEtc2VLd1ZAwRjVoNG9YcGJKZA3p6djZAaRUVCNHlQT2pwQWtLa21zZA' +
    '2J5aDdBd09ZAczloeTFhQnVTei1wSTllR0ZAhVzN0dDZAQejdCcHNmaE9sbGJZATQZDZD';
const numberOfImages = '&count=10';
const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}${numberOfImages}`;
const userProfile = 'arko8919';
const urlTest = `https://www.instagram.com/${userProfile}/?__a=1`;
/* global variables */

/* current displayed image */
let imageNumberFirstBox = 0;

let imageNumberSecondBox = 0;
/* store data from instagram api */
let responseObject = {};

/* fetch data from instagram API and if successful display images */
///fetchImages(url);
fetchImages(urlTest);



/* change image on call to action button press */
buttonRef[0].addEventListener('click', () => {
    /* retrieve image from response object */
    imageNumberFirstBox = changeImage(imageNumberFirstBox, imgRef[0]);
});
buttonRef[1].addEventListener('click', () => {
    /* retrieve image from response object */
    imageNumberSecondBox = changeImage(imageNumberSecondBox, imgRef[1]);
});


function changeImage(imageNumber, img) {
    if(imageNumber === 9) {
        imageNumber = 0;
    } else {
        imageNumber++;
    }

    img.src = responseObject.data[imageNumber].media_url;

    return imageNumber;
}

function fetchImages(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                console.log(response);
                return response.json();
            }
        })
        .then((json) => {
            responseObject = json;
            console.log(responseObject.graphql.user.edge_owner_to_timeline_media.edges);

         //   imgRef[0].src = json.data[0].media_url;
        //    imgRef[1].src = json.data[0].media_url;
        })
        .catch(e => {
            console.log(`There has been a problem with your fetch operation for resource " ${url}": ${e.message}`);
        })
        .finally(() => {
            console.log(`fetch attempt for "${url}" finished.`);
        });
}

