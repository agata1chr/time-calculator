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
let hour;
let minutes;
let actualyAction = '';
let prevAction = '';
let operation = undefined;

const showTime = (hour, minut) => {
	if (minut >= 60) {
		minuty = parseInt(minut / 60);
		console.log(minuty);
		hour = hour + minuty;
		minut = minut - minuty * 60;
	}
	if (minut < 0) {
		console.log('godzina2');
	}
	console.log(hour + ' ' + minut);
};
showTime(12, 285);
