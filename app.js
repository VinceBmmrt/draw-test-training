// Get the drawing board container
const drawingBoard = document.querySelector(".drawing-board");
const gridSizeForm = document.getElementById("grid-size-form");
const gridSizeInput = document.getElementById("grid-size");

// Function to create the pixel grid
function createPixelGrid(rows, columns) {
  drawingBoard.innerHTML = ""; // Clear the previous grid

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      drawingBoard.appendChild(pixel);
    }
  }

  // Set the grid-template-columns based on the number of columns
  drawingBoard.style.gridTemplateColumns = `repeat(${columns}, 30px)`;
}

// Create an 8x8 pixel grid
createPixelGrid(8, 8);

// Add click event listener to the drawing board to handle pixel clicks
drawingBoard.addEventListener("click", (event) => {
  if (event.target.classList.contains("pixel")) {
    // Toggle the active class to change the color of the pixel
    event.target.classList.toggle("active");
  }
});

// FORM

function handleFormSubmit(event) {
  event.preventDefault();
  const gridSize = parseInt(gridSizeInput.value, 10);
  createPixelGrid(gridSize, gridSize);
}

gridSizeForm.addEventListener("submit", handleFormSubmit);
