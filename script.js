const btn = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const e_btn = document.getElementById('e_btn');
const inputRange = document.getElementById('range');

e_btn.style.display = 'none'

btn.addEventListener('click', function () {
	const color = inputText.value;
	square.style.backgroundColor = color;
});

inputRange.addEventListener('input', function () {
	const value = inputRange.value;
	circle.style.width = value + '%';
	circle.style.height = value + '%';
});