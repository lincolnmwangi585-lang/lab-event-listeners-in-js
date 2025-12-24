function changeBackgroundColor () {
  document.body.style.backgroundColor = 'rgb(173, 216, 230)';
}

function resetBackgroundColor () {
  document.body.style.backgroundColor = '';
}

function displayUserInput() {
  const input = document.getElementById('textInput').value;
  const display = document.getElementById('textInputDisplay');
  display.textContent = `You typed: ${input}`;
}


function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `Key pressed: ${event.key}`;
}

function setupEventListeners () {
  document.getElementById("changeColorButton").addEventListener('click', changeBackgroundColor);

document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor);
document.addEventListener('keydown',displayKeyPress);

document.getElementById('textInput').addEventListener('input', displayUserInput);
}

if(typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};