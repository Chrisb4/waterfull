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
  const template = `<h1>${parseInt(waterDrank)}</h1>`
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

