const main = document.querySelector(".main");
const slider = document.getElementById("myRange");
const output = document.getElementById("output");
const applyBtn = document.querySelector("button");

function createGrid(rows, columns) {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const grid = document.createElement("div");
			main.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
			main.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
			grid.classList.add("grid");
			main.appendChild(grid);

			const grids = document.querySelectorAll(".grid");

			grids.forEach((grid) => {
				grid.addEventListener("mouseover", (e) => {
					const x = e.clientX;
					const y = e.clientY;
					const randomR = Math.floor(Math.random() * 255);
					const randomG = Math.floor(Math.random() * 255);
					const randomB = Math.floor(Math.random() * 255);
					grid.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
					console.log("over");
				});
			});
		}
	}
}

createGrid(3, 3);

slider.oninput = function () {
	output.innerHTML = `${this.value} x ${this.value}`;
};

applyBtn.addEventListener("click", () => {
	main.innerHTML = "";
	createGrid(`${slider.value}`, `${slider.value}`);
});
