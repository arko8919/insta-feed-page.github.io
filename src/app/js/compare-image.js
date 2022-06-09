export function compareImage(buttonNumber, imageNumber) {
    /* If the last images are the same, reset array to 0 */
    if ((imageNumber[0] === imageNumber[1]) && imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } /* If any of the images are the same, move to the next one */
    else if (imageNumber[0] === imageNumber[1]) {
        return imageNumber[buttonNumber] + 1;
    } else {
        return imageNumber[buttonNumber];
    }
}