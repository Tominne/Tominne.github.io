// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

const headImages = [
  "./images/head0.png",
  "./images/head1.png",
  "./images/head2.png",
  "./images/head3.png",
  "./images/head4.png",
  "./images/head5.png",
];
const bodyImages = [
  "./images/body0.png",
  "./images/body1.png",
  "./images/body2.png",
  "./images/body3.png",
  "./images/body4.png",
  "./images/body5.png",
];
const shoesImages = [
  "./images/shoes0.png",
  "./images/shoes1.png",
  "./images/shoes2.png",
  "./images/shoes3.png",
  "./images/shoes4.png",
  "./images/shoes5.png",
];

let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;

const headElement = document.getElementById("head");
const bodyElement = document.getElementById("body");
const shoesElement = document.getElementById("shoes");

function changeHat() {
  headIndex = (headIndex + 1) % headImages.length;
  headElement.src = headImages[headIndex];
}

function changeClothes() {
  bodyIndex = (bodyIndex + 1) % bodyImages.length;
  bodyElement.src = bodyImages[bodyIndex];
}

function changeShoes() {
  shoesIndex = (shoesIndex + 1) % shoesImages.length;
  shoesElement.src = shoesImages[shoesIndex];
}

let currentElement = "head";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    if (currentElement === "head") {
      currentElement = "shoes";
    } else if (currentElement === "body") {
      currentElement = "head";
    } else if (currentElement === "body") {
      currentElement = "head";
    }
  } else if (event.key === "ArrowDown") {
    if (currentElement === "head") {
      currentElement = "body";
    } else if (currentElement === "body") {
      currentElement = "shoes";
    } else if (currentElement === "shoes") {
      currentElement = "head";
    }
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    if (currentElement === "head") {
      changeHat();
    } else if (currentElement === "body") {
      changeClothes();
    } else if (currentElement === "shoes") {
      changeShoes();
    }
  }
});
