const container = document.getElementById("container");

// for (let i = 0; i < 256; i++) {
//   const grid_1 = document.createElement("div");
//   grid_1.classList.add("box");
//   grid_1.addEventListener("mouseover", () => {
//     grid_1.classList.add("new-container");
//   });
//   container.appendChild(grid_1);

// }

let userInput = 16;
document.getElementById("popUpBtn").addEventListener("click", () => {
  userInput = prompt("Please enter the desired number of box");
  container.innerHTML = null;

  for (let i = 0; i < userInput; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let j = 0; j < userInput; j++) {
      const newBox = document.createElement("div");
      newBox.classList.add("box");
      newRow.appendChild(newBox);
    }
    container.appendChild(newRow);
  }
});
