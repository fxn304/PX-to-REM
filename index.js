let inputMode = 0;
let firstInput = document.getElementById('first-input');
let secondInput = document.getElementById('second-input');
let inputs = document.querySelectorAll('input, textarea');

// CHANGE MODE

let changeBtn = document.querySelector('.change-btn');
changeBtn.addEventListener('click', function () {
  inputs.value = 0;
  inputs.textContent = 0;
  if (inputMode === 0) {
    inputMode = 1;
    document.querySelector('.rem-h4').textContent = 'PX';
    document.querySelector('.px-h4').textContent = 'REM';
    document.querySelector('.title').textContent = 'REM to PX converter';
  } else {
    inputMode = 0;
    document.querySelector('.rem-h4').textContent = 'REM';
    document.querySelector('.px-h4').textContent = 'PX';
    document.querySelector('.title').textContent = 'PX to REM converter';
  }
});

inputs.forEach(function calcInput(input) {
  input.addEventListener('input', function (index) {
    if (inputMode === 1) {
      secondInput.value = firstInput.value * 16;
    } else {
      secondInput.value = firstInput.value / 16;
    }
  });
});
