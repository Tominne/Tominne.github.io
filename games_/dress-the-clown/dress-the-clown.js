// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!");

const headImages = [
  "./images/head0.png",
  "./images/head1.png",
];
const bodyImages = [
  "./images/body0.png",
  "./images/body1.png",
  "./images/body2.png",
  "./images/body3.png",
  "./images/body4.png",
  "./images/body5.png",
  "./images/body6.png",
  "./images/body7.png",
  "./images/body8.png",
  "./images/body9.png",
  "./images/body10.png",
  
];
const shirtImages = [
  "./images/shirt0.png",
  "./images/shirt1.png",
]

const pantImages = [
  "./images/pant0.png",
  "./images/pant1.png",
  "./images/pant2.png",
  "./images/pant3.png",
  "./images/pant4.png",
  "./images/pant5.png",
  "./images/pant6.png",
  "./images/pant7.png",
  "./images/pant8.png",
  "./images/pant9.png",
]

let headIndex = 0;
let bodyIndex = 0;
let pantIndex = 0;
let shirtIndex = 0;

const headElement = document.getElementById("head");
const bodyElement = document.getElementById("body");
const pantElement = document.getElementById("pant");
const shirtElement = document.getElementById("shirt");

function changeHat() {
  headIndex = (headIndex + 1) % headImages.length;
  headElement.src = headImages[headIndex];
}

function changeBody() {
  bodyIndex = (bodyIndex + 1) % bodyImages.length;
  bodyElement.src = bodyImages[bodyIndex];
}

function changePant() {
  pantIndex = (pantIndex + 1) % pantImages.length;
  pantElement.src = pantImages[pantIndex];
}

function changeShirt() {
  shirtIndex = (shirtIndex + 1) % shirtImages.length;
  shirtElement.src = shirtImages[shirtIndex];
}

let currentElement = "head";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    if (currentElement === "head") {
      currentElement = "pant";
    } else if (currentElement === "body") {
      currentElement = "head";
    } else if (currentElement === "pant") {
      currentElement = "body";
    }
  } else if (event.key === "ArrowDown") {
    if (currentElement === "head") {
      currentElement = "body";
    } else if (currentElement === "body") {
      currentElement = "pant";
    } else if (currentElement === "pant") {
      currentElement = "head";
    }
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    if (currentElement === "head") {
      changeHat();
    } else if (currentElement === "shirt") {
      changeShirt();
    } else if (currentElement === "body") {
      changeBody();
    } else if (currentElement === "pant") {
      changePant();
    }
  }
});

const buttons = {
  changeHat: document.getElementById("change-hat-button"),
  changeShirt: document.getElementById("change-shirt-button"),
  changeBody: document.getElementById("change-body-button"),
  changePant: document.getElementById("change-pant-button")
};

buttons.changeHat.addEventListener("click", changeHat);
buttons.changeBody.addEventListener("click", changeBody);
buttons.changeShirt.addEventListener("click", changeShirt);
buttons.changePant.addEventListener("click", changePant);

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