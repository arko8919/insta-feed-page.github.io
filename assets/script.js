/* DOM elements references */
const buttonRef = document.querySelectorAll('button');
const imgRef = document.querySelectorAll('.image-wrapper img');
const imgCaption = document.querySelectorAll('section h2');


/* URL to fetch data from Instagram API */
const fields = 'caption, media_url';
const accessToken = 'IGQVJYLWIxbUtQaXFkT3hfaXBHOVUxRlozQUJLWnEtc2VLd1ZAwRjVoNG9YcGJKZA3p6djZAaRUVCNHlQT2pwQWtLa21zZA' +
    '2J5aDdBd09ZAczloeTFhQnVTei1wSTllR0ZAhVzN0dDZAQejdCcHNmaE9sbGJZATQZDZD';
const numberOfImages = '&count=10';
const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}${numberOfImages}`;
/* global variables */

/* currently displayed 10 images - image number 1 and image number 9 */
let imageNumber = [0, 9];
/* data from instagram api - media_url and caption */
let responseObject = {};

/* fetch data from Instagram API and if successful display image number 1 and image number 9 */
fetchImages(url).then((json) => {
    responseObject = json;
});

for (let buttonNumber = 0; buttonNumber < buttonRef.length; buttonNumber++) {
    buttonRef[buttonNumber].addEventListener('click', () => {
        changeImage(imgRef[buttonNumber], imgCaption[buttonNumber], buttonNumber);
    });
}

function changeImage(img, captionPara, buttonNumber) {
    /* check if the last image display or just add 1 to array */
    imageNumber[buttonNumber] = updateArray(buttonNumber);
    /* if image repeat, move to next one */
    imageNumber[buttonNumber] = compareImage(buttonNumber);
    img.src = responseObject.data[imageNumber[buttonNumber]].media_url;
    captionPara.textContent = responseObject.data[imageNumber[buttonNumber]].caption;
}

function updateArray(buttonNumber) {
    if (imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } else {
        return imageNumber[buttonNumber] = imageNumber[buttonNumber] + 1;
    }
}

function compareImage(buttonNumber) {
    if ((imageNumber[0] === imageNumber[1]) && imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } else if (imageNumber[0] === imageNumber[1]) {
        return imageNumber[buttonNumber] + 1;
    } else {
        return imageNumber[buttonNumber];
    }
}

function fetchImages(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then((json) => {
            imgRef[0].src = json.data[0].media_url;
            imgRef[1].src = json.data[9].media_url;
            imgCaption[0].textContent = json.data[0].caption;
            imgCaption[1].textContent = json.data[1].caption;
            return json;
        })
        .catch(e => {
            console.log(`There has been a problem with your fetch operation for resource " ${url}": ${e.message}`);
        })
        .finally(() => {
            console.log(`fetch attempt finished.`);
        });
}

