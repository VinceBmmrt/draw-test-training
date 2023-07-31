// Get the drawing board container
const drawingBoard = document.querySelector(".drawing-board");

// Function to create the pixel grid
function createPixelGrid(rows, columns) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      drawingBoard.appendChild(pixel);
    }
  }
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
