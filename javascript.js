const grid = document.querySelector(".grid");

for (let i = 0; i < 4; i++) {
    const grid_column = document.createElement('div');
    for (let j = 0; j < 4; j++) {
        const square = document.createElement('div');
        square.classList.add("grid_square");
        grid_column.appendChild(square);
    }
    grid_column.classList.add("grid_column");
    grid.appendChild(grid_column);
}
