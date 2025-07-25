const container = document.querySelector(".container");
// const rows = document.querySelector(".row");

let value = 16;
createGrid(value);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  value = prompt("Enter new value");
  if (value > 100) {
    alert("Enter value less than 100");
  } else {
    container.innerHTML = "";
    createGrid(value);
  }
});

function createGrid(value) {
  for (let r = 0; r < value; r++) {
    const rows = document.createElement("div");
    for (let c = 0; c < value; c++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      rows.appendChild(grid);
    }

    rows.classList.add("rows");
    container.appendChild(rows);
  }

  const grid = document.querySelectorAll(".grid");

  grid.forEach((element) => {
    element.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random()*256)
      let green = Math.floor(Math.random()*256)
      let blue = Math.floor(Math.random()*256)
      element.style.background = `rgb(${red},${green},${blue})`;
    });
  });
}
