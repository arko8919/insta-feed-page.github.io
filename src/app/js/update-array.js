export function updateArray(buttonNumber, imageNumber) {
    if (imageNumber[buttonNumber] === 9) {
        return imageNumber[buttonNumber] = 0;
    } else {
        return imageNumber[buttonNumber] = imageNumber[buttonNumber] + 1;
    }
}