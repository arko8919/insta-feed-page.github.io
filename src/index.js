/* Import styles */
import "./normalize.css";
import "./style.scss";
/* Import javascript */
import { fetching } from "./app/js/fetch-image";
import { changeImage } from "./app/js/change-image";

/* DOM elements references */
const buttonRef = document.querySelectorAll("button");
const imgRef = document.querySelectorAll(".image-wrapper img");
const imgCaption = document.querySelectorAll("section h2");

/* Images with numbers 1 and 10 */
let imageNumber = [0, 9];
/* Data from instagram api - media_url and caption */
let responseObject = {};

fetching().then((json) => {
  responseObject = json;

  for (let buttonNumber = 0; buttonNumber < buttonRef.length; buttonNumber++) {
    buttonRef[buttonNumber].addEventListener("click", () => {
      imageNumber = changeImage(
        imgRef[buttonNumber],
        imgCaption[buttonNumber],
        buttonNumber,
        imageNumber,
        responseObject
      );
    });
  }
});
