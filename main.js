
console.log('Adding data persistence next');

console.log("hello June");

const waterForm = document.getElementById('waterForm');
const button = document.getElementById('button');
const butt = document.getElementById('click-target');
const target = document.getElementById('target')
const water = document.querySelector('input[name=water]');
const output = document.querySelector('#output');
console.log(output);
let waterDrank = 0;


function updateOutput(vol) {
  output.value = vol;
}

function targetUpdate(waterDrank) {
  const template = `<h1>${parseInt(waterDrank)} ounces</h1>`
  target.innerHTML = template;
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  waterDrank = parseInt(waterDrank) + parseInt(water.value);
  targetUpdate(waterDrank);
});

water.addEventListener('change', function(e) {
  const waterVal = water.value;
  updateOutput(waterVal);
});

const waterForm2 = document.getElementById('waterForm2');
const button2 = document.getElementById('button2');
const butt2 = document.getElementById('click-target2');
const target2 = document.getElementById('target2')
const water2 = document.querySelector('input[name=water]');
const output2 = document.querySelector('#output');
console.log(output2);
let waterDrank2 = 0;


function updateOutput(vol) {
  output.value = vol;
}

function targetUpdate(waterDrank) {
  const template = `<h1>${parseInt(waterDrank)} ounces</h1>`
  target.innerHTML = template;
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  waterDrank = parseInt(waterDrank) + parseInt(water.value);
  targetUpdate(waterDrank);
});

water.addEventListener('change', function(e) {
  const waterVal = water.value;
  updateOutput(waterVal);
});
