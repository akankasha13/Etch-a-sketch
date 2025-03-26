const container = document.getElementById("container");
const eraserBtn = document.getElementById("eraser");
const randomBtn = document.getElementById("random");

let userInput = 16;
const pink = "rgb(235, 90, 138)";
let coloured = -1;

function sixteen() {
  for (let i = 0; i < userInput; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let j = 0; j < userInput; j++) {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      newRow.appendChild(newBox);
      newBox.addEventListener("mouseover", () => {
        newBox.style.backgroundColor = randomColour();
      });
    }
    container.appendChild(newRow);
  }
}
function randomColour() {
  if (coloured == 0) return "white";
  if (coloured == -1) return pink;

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

eraserBtn.addEventListener("click", () => {
  if (coloured == 0) {
    coloured = -1;
  } else {
    coloured = 0;
  }
});

randomBtn.addEventListener("click", () => {
  if (coloured == 1) {
    coloured = -1;
  } else {
    coloured = 1;
  }
});

document.getElementById("popUpBtn").addEventListener("click", () => {
  userInput = prompt("Please enter the desired number of boxes");
  container.innerHTML = null;
  if (userInput > 100) {
    alert("Please enter a value less than 100");
  } else {
    sixteen();
  }
});

sixteen();
