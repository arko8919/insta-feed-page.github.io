import {updateArray} from './update-array';
import {compareImage} from './compare-image';

export function changeImage(img, captionPara, buttonNumber, imageNumber, responseObject) {
    /* check if the last image displayed or just add 1 to array */
    imageNumber[buttonNumber] = updateArray(buttonNumber, imageNumber);
    /* if image repeat, move to next one */
    imageNumber[buttonNumber] = compareImage(buttonNumber, imageNumber);
    // update images displayed
    img.src = responseObject.data[imageNumber[buttonNumber]].media_url;
    captionPara.textContent = responseObject.data[imageNumber[buttonNumber]].caption;

    return imageNumber;
}