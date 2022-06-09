export function updateArray(buttonNumber, imageNumber) {
    /* If image with number 9 in array is displayed, change the number in the array to 0   */
    if (imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } else {
        /* If image with number 0 in array is displayed, add 1  */
        return imageNumber[buttonNumber] = imageNumber[buttonNumber] + 1;
    }
}