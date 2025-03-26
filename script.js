const container = document.getElementById("container");
const eraserBtn = document.getElementById("eraser");

let userInput = 16;
const pink = "rgb(235, 90, 138)";
let colour = "rgb(235, 90, 138)";

function sixteen() {
  for (let i = 0; i < userInput; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let j = 0; j < userInput; j++) {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      newRow.appendChild(newBox);
      newBox.addEventListener("mouseover", () => {
        newBox.style.backgroundColor = colour;
      });
    }
    container.appendChild(newRow);
  }
}

sixteen();

eraserBtn.addEventListener("click", () => {
  if (colour == pink) {
    colour = "rgb(255,255,255)";
  } else {
    colour = pink;
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
