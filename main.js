// Colour Array

// variables
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Global variable
let colors;

// Fetch content from colors.txt
fetch("colours.txt").then(convertData).catch(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    displayColors(colors);
}


// event listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
  if (event.keyCode === 13) {
    // Add user's color to colors array and display
    colors.push(inputEl.value);
    inputEl.value = "";
    displayColors(colors);
  }
}

function displayColors(colors) {
  // Display all colors on page
  let divStr = "";
  for (let i = 0; i < colors.length; i++) {
    divStr += `<div style="background: ${colors[i]}"></div>`;
  }
  containerEl.innerHTML = divStr;
}
