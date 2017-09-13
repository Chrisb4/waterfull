
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

// make the slider update on change event

// make an object to save the water drank for the day


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
