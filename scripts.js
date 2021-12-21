const max_wid = screen.width - 20;
const max_hei = screen.height - 200;
let circle;
let square;
let triangle;
let z = 0;

const buttons = document.querySelectorAll('button');

function get_figures_number() {
	return figures_number = document.querySelector('.figures_number').value;
}

function create_square() {
	let figures_number = get_figures_number();

	for (let i = 0; i < figures_number; i++) {
		//z += 1;
		let left_pos = Math.floor(Math.random() * (max_wid - 250)) + 250;
		let top_pos = Math.floor(Math.random() * (max_hei - 0)) + 0;
		let wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="square figure"></div>`);
		square = document.querySelector('.square');
		square.style.width = wid + 'px';
		square.style.height = wid + 'px';
		square.style.top = top_pos + 'px';
		square.style.left = left_pos + 'px';
		square.style.zIndex = ++z;
	}
}

function create_triangle() {
	let figures_number = get_figures_number();

	for (let i = 0; i < figures_number; i++) {
		//z += 1;
		let left_pos = Math.floor(Math.random() * (max_wid - 500)) + 250;
		let top_pos = Math.floor(Math.random() * (max_hei - 0)) + 0;
		let wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="triangle figure"></div>`);
		triangle = document.querySelector('.triangle');
		triangle.style.borderLeft = wid + 'px solid transparent';
		triangle.style.borderRight = wid + 'px solid transparent';
		triangle.style.borderBottom = wid + 'px solid rgba(0,0,255,0.80)';
		triangle.style.top = top_pos + 'px';
		triangle.style.left = left_pos + 'px';
		triangle.style.zIndex = ++z;
	}
}

function create_circle() {
	let figures_number = get_figures_number();

	for (let i = 0; i < figures_number; i++) {
		//z += 1;
		let left_pos = Math.floor(Math.random() * (max_wid - 250)) + 250;
		let top_pos = Math.floor(Math.random() * (max_hei - 0)) + 0;
		let wid = Math.floor(Math.random() * (250 - 50)) + 50;
		document.body.insertAdjacentHTML("afterbegin", `<div class="circle figure"></div>`);
		circle = document.querySelector('.circle');
		circle.style.width = wid + 'px';
		circle.style.height = wid + 'px';
		circle.style.borderRadius = wid / 2 + 'px';
		circle.style.top = top_pos + 'px';
		circle.style.left = left_pos + 'px';
		circle.style.zIndex = ++z;
	}
}


function click_n_dclick_events() {
	document.body.addEventListener("click", event => {
		if (square != null) square.style.backgroundColor = 'rgba(255,0,0,0.80)';
		if (circle != null) circle.style.backgroundColor = 'rgba(0,100,0,0.80)';
		if (triangle != null) triangle.style.borderBottomColor = 'rgba(0,0,255,0.80)';
		if (event.target.classList.contains("circle")) {
			circle = event.target;
			circle.style.backgroundColor = 'rgba(255,255,0,0.80)';
		}
		if (event.target.classList.contains("square")) {
			square = event.target;
			square.style.backgroundColor = 'rgba(255,0,255,0.80)';
		}
		if (event.target.classList.contains("triangle")) {
			triangle = event.target;
			triangle.style.borderBottomColor = 'rgba(0,255,255,0.80)';
		}
	});
	document.body.addEventListener("dblclick", event => {
		if (event.target.classList.contains("square") ||
			event.target.classList.contains("triangle") ||
			event.target.classList.contains("circle")) {
			document.body.removeChild(event.target);
		}
	});
}

document.addEventListener("DOMContentLoaded", () => click_n_dclick_events());

function delete_all_figures() {
	figures = document.querySelectorAll('.figure');

	figures.forEach(figure => {
		document.body.removeChild(figure);
	})
}

buttons.forEach(button => {
	button.onclick = () => {
		switch (button.className) {
			case 'square_btn':
				create_square();
				break;
			case 'circle_btn':
				create_circle();
				break;
			case 'triangle_btn':
				create_triangle();
				break;
			case 'delete_all':
				delete_all_figures();
				break;
		}
	}
})