const body = document.querySelector("body");
const grid = document.getElementById("grid");
const btnReset = document.querySelector(".button-reset");
const btnRandom = document.querySelector(".button-random");
// body.appendChild(title);
// body.appendChild(grid);

let inputNumber = prompt("you wanna using many grids?");

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

    createDiv();
  } else if (isNaN(rows) && isNaN(cols)) {
    alert("number only");
    userInput();
  } else {
    alert("max 64 grid");
    userInput();
  }
}

let randomMode = false;

function createDiv() {
  for (let i = 0; i < inputNumber * inputNumber; i++) {
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);

    newDiv.addEventListener("mousemove", () => {
      if (randomMode) {
        newDiv.style.backgroundColor = randomColorFn();
        newDiv.classList.add("box");
      } else {
        newDiv.style.backgroundColor = "#fff";
        newDiv.classList.add("box");
      }
    });
  }
}

function randomColorFn() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function resetSketch() {
  let boxesReset = document.querySelectorAll(".box");
  boxesReset.forEach((box) => {
    box.style.backgroundColor = "";
  });
}

btnReset.addEventListener("click", () => {
  resetSketch();
});

btnRandom.addEventListener("click", () => {
  randomMode = !randomMode; // Toggle mode acak
  if (randomMode) {
    btnRandom.textContent = "base color";
  } else {
    btnRandom.textContent = "random color";
  }
});
