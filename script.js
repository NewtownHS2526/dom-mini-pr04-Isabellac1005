console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6





// Create position variables for each penguin and set them all to 1
let tux_position = 1;
let daisy_position = 1; 
let rocky_position = 1; 
const changePosition = (lane, position) => (position <= 5 ? lane.style.setProperty('grid-column', position) : null);



// Query selectors for all buttons and penguins go here
const tuxButton = document.querySelector("#tux-button");
const daisyButton = document.querySelector("#daisy-button");
const rockyButton = document.querySelector("#rocky-button");



// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
const advanceTux = (e) => {
  console.log("clicked");
  tux_position += 1; 
  changePosition(tuxLane, tux_position);
  checkWinner(tux_position, "tux");
  tuxLane.alt = `tux lane at position ${tux_position} out of 5`    
};


// Write the function that moves Daisy forward
const advanceDaisy =(e) => {
    console.log("clicked");
    daisy_position += 1; 
    changePosition(daisyLane, daisy_position); 
    checkWinner(daisy_position, "daisy"); 
    daisyLane.alt = `daisy lane at position ${daisy_position} out of 5`

};


// Write the function that moves Rocky forward
const advanceRocky =(e) => {
    console.log("clicked");
    rocky_position += 1; 
    changePosition(rockyLane, rocky_position); 
    checkWinner(rocky_position, "rocky"); 
    rockyLane.alt = ` rocky lane at position ${rocky_position} out of 5`   
}


// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
const checkWinner = (position, color) => {
  if (position === 5) {
    winnerText.innerHTML = color + " Tux is the Winner!";
  }
};



// Add event listeners for each button
// Each button should trigger its own movement function
tuxButton.addEventListener("click", advanceTux);
daisyButton.addEventListener("click", advanceDaisy);
rockyuButton.addEventListener("click", advanceRocky);
