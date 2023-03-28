const numbers = document.querySelectorAll('.number');
const cancel = document.querySelector('#cancel');
const arrowLeft = document.querySelector('#leftArrow');
const arrowRight = document.querySelector('#RightArrow');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const dots = document.querySelector('#dot');
const duplicate = document.querySelector('#duplicate');
const resultbtn = document.querySelectorAll('#resultbtn');
const prevOperation = document.querySelector('.prevOperation');
const mathResult = document.querySelector('.mathResult');

let actualyAction = '';
let prevAction = '';
let operation = undefined;
