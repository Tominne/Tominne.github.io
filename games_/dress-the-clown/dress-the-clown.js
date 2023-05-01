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
const shirtImages = [
  "./images/shirt1.png",
  "./images/shirt2.png",
  "./images/shirt3.png",
]

let headIndex = 0;
let bodyIndex = 0;
let shoesIndex = 0;
let shirtIndex = 1;

const headElement = document.getElementById("head");
const bodyElement = document.getElementById("body");
const shoesElement = document.getElementById("shoes");
const shirtElement = document.getElementById("shirt");

function changeHat() {
  headIndex = (headIndex + 1) % headImages.length;
  headElement.src = headImages[headIndex];
}

function changeBody() {
  bodyIndex = (bodyIndex + 1) % bodyImages.length;
  bodyElement.src = bodyImages[bodyIndex];
}

function changeShoes() {
  shoesIndex = (shoesIndex + 1) % shoesImages.length;
  shoesElement.src = shoesImages[shoesIndex];
}

function changeShirt() {
  shirtIndex = (shirtIndex + 1) % shirtImages.length;
  shirtElement.src = shirtImages[shirtIndex];
}

let currentElement = "head";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    if (currentElement === "head") {
      currentElement = "shoes";
    } else if (currentElement === "body") {
      currentElement = "head";
    } else if (currentElement === "shoes") {
      currentElement = "body";
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
    } else if (currentElement === "shirt") {
      changeShirt();
    } else if (currentElement === "body") {
      changeBody();
    }
  }
});

const buttons = {
  changeHat: document.getElementById("change-hat-button"),
  changeShirt: document.getElementById("change-shirt-button"),
  changeBody: document.getElementById("change-body-button")
};

buttons.changeHat.addEventListener("click", changeHat);
buttons.changeBody.addEventListener("click", changeBody);
buttons.changeShirt.addEventListener("click", changeShirt);

let touchStartX = 0;
let touchStartY = 0;

/*document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchEndY = event.changedTouches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      if (currentElement === "head") {
        changeHat();
      } else if (currentElement === "body") {
        changeClothes();
      } else if (currentElement === "shoes") {
        changeShoes();
        console.log('shoeClick');
      }
    } else {
      // Swipe left
      // ...
    }
  } else {
    if (deltaY > 0) {
      // Swipe down
      // ...
    } else {
      // Swipe up
      // ...
    }
  }
});

/*const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");


  canvas.width = 200;
  canvas.height = 200;


  const headImg = document.getElementById("head");
  const bodyImg = document.getElementById("body");
  const shoesImg = document.getElementById("shoes");


  ctx.drawImage(headImg, 0, 0);
  ctx.drawImage(bodyImg, 0, headImg.height);
  ctx.drawImage(shoesImg, 0, headImg.height + bodyImg.height);


  const dataUrl = canvas.toDataURL("image/png");


  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "clownState.png";
  a.click();
});---*/