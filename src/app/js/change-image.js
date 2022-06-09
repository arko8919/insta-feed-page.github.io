import {updateArray} from './update-array';
import {compareImage} from './compare-image';

export function changeImage(img, captionPara, buttonNumber, imageNumber, responseObject) {
    /* Check which image in array is displayed and update array */
    imageNumber[buttonNumber] = updateArray(buttonNumber, imageNumber);
    /* If image repeat, move to next one */
    imageNumber[buttonNumber] = compareImage(buttonNumber, imageNumber);
    // Update images displayed
    img.src = responseObject.data[imageNumber[buttonNumber]].media_url;
    captionPara.textContent = responseObject.data[imageNumber[buttonNumber]].caption;

    return imageNumber;
}