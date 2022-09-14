// Colour Array

// variables
let containerEl = document.getElementById("container");

// Array
let colours = ["red", "green", "blue", "orange", "cyan"];

// Click Event
document.addEventListener("click", update);

function update() {
    containerEl.innerHTML = `<div style="background: ${colours[randomInt(0, 5)]}"></div>`;
}



