// Colour Array

// variables
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Global variable
let colors;

// Fetch content from colors.txt
fetch("colours.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    displayColors(colors);
}


// event listener
inputEl.addEventListener("keyup", submitHandler);

function submitHandler(event) {
  let divStr = "";
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].includes(inputEl.value)) {
    divStr += `<div style="background: ${colors[i]}">${colors[i]}</div>`;
    }
  }
  containerEl.innerHTML = divStr;
}

function displayColors(colors) {
  // Display all colors on page
  let divStr = "";
  for (let i = 0; i < colors.length; i++) {
    divStr += `<div style="background: ${colors[i]}">${colors[i]}</div>`;
  }
  containerEl.innerHTML = divStr;
}
