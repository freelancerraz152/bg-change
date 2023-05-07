/*  Project Requirements: 
Change the background color by generating random rbg color by clicking a button
*/

const root = document.querySelector('#root');
const btn = document.querySelector('.btn');


	// event handlers
	btn.addEventListener('click', () => {
		const bgColor = randomRgbColor();
		root.style.background = bgColor;
	});


// generate random rgb color
const randomRgbColor = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const black = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${black})`;
};
