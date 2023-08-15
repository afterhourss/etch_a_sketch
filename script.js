const body = document.querySelector("body");
const grid = document.getElementById("grid");
const btnReset = document.querySelector(".button-reset");
const btnRandom = document.querySelector(".button-random");
// const btnErase = document.querySelector(".button-erase");
// body.appendChild(title);
// body.appendChild(grid);

//program start from here, get the input from user
let inputNumber = prompt("you wanna using many grids?");

//creating grid by invoked a function
createGrid(inputNumber, inputNumber);

// make a code prettier (not really)

//generate grid size
function createGrid(rows, cols) {
  if (rows <= 64 && cols <= 64) {
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.display = "grid";
    grid.style.width = "580px";
    grid.style.height = "580px";

    //after creating grid, program continue to creating div box
    createDiv();
  } else if (isNaN(rows) && isNaN(cols)) {
    alert("number only");
    inputNumber;
  } else {
    alert("max 64 grid");
    inputNumber;
  }
}

//this variable for toggle the random mode is turn off and on
let randomMode = false;

//generate a div box using for loop with event listener when mouse passing
function createDiv() {
  for (let i = 0; i < inputNumber * inputNumber; i++) {
    //adding DOM
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mousemove", () => {
      //if randomMode variable its false then change background to white (deafult color)
      if (randomMode) {
        newDiv.style.backgroundColor = randomColorFn();
        //adding .box class to initialize for resetSketch function later on
        newDiv.classList.add("box");
      } else {
        newDiv.style.backgroundColor = "#fff";
        newDiv.classList.add("box");
      }
    });
  }
}

//this function used for generate random hex color and return it
function randomColorFn() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

//this for reset the color, make the box background value to nothing ""
function resetSketch() {
  let boxesReset = document.querySelectorAll(".box");
  boxesReset.forEach((box) => {
    box.style.backgroundColor = "";
  });
}

// let eraseMode = false;
// function eraseSketch() {
//   const boxActive = document.querySelectorAll(".box");
//   boxActive.forEach((e) => {
//     e.addEventListener("mousemove", () => {
//       e.style.backgroundColor = "";
//     });
//   });
// }

//if this reset button clicked, run the reset sketch function
btnReset.addEventListener("click", () => {
  resetSketch();
});

// btnErase.addEventListener("click", () => {
//   eraseMode = !eraseMode;
//   if (eraseMode) {
//     btnErase.style.backgroundColor = "#fff";
//     btnErase.style.color = "#000";
//     eraseSketch();
//   } else {
//     btnErase.style.backgroundColor = "";
//   }
// });

// if this random button clicked, run the random function
btnRandom.addEventListener("click", () => {
  randomMode = !randomMode; // toggle to random mode
  if (randomMode) {
    btnRandom.style.backgroundColor = "#fff";
  } else {
    btnRandom.style.backgroundColor = "";
  }
});
