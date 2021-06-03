export function compareImage(buttonNumber, imageNumber) {
    if ((imageNumber[0] === imageNumber[1]) && imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } else if (imageNumber[0] === imageNumber[1]) {
        return imageNumber[buttonNumber] + 1;
    } else {
        return imageNumber[buttonNumber];
    }
}