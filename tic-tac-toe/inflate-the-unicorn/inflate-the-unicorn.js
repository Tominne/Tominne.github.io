  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")




function handleClick() {
  document.getElementById('uni1').src = './images/unicorn-1.png';
  console.log('Neigh');
}



function handleClick2() {
  horn1.addEventListener('click', handleClick)
  document.getElementById('uni1').src = './images/unicorn-1.png';
  console.log('Neigh');
}


function handleClick3() {
  horn1.addEventListener('click', handleClick);
  document.getElementById(`uni1`).src = `./images/unicorn-2.png`
}

let clickCount = 0;
let horn1 = document.getElementById('uni1');

horn1.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    horn1.src = './images/unicorn-1.png';
  } else if (clickCount === 2) {
    horn1.src = './images/unicorn-2.png';
  }
});


let horn2 = document.getElementById('uni2');

horn1.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    horn2.src = './images/unicorn-1.png';
  } else if (clickCount === 2) {
    horn2.src = './images/unicorn-2.png';
  }
});

let horn3 = document.getElementById('uni3');

horn1.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    horn3.src = './images/unicorn-1.png';
  } else if (clickCount === 2) {
    horn3.src = './images/unicorn-2.png';
  }
});