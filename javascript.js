const grid = document.querySelector(".grid");

let n = 4;

function creategrid() {
    for (let i = 0; i < n; i++) {
        const grid_column = document.createElement('div');
        for (let j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add("grid_square");
            let square_size = 1200/n; 
            square.style.height = `${square_size}px`;
            square.style.width = `${square_size}px`;
            grid_column.appendChild(square);
        }
        grid_column.classList.add("grid_column");
        grid.appendChild(grid_column);
        
    }

    const squares = document.querySelectorAll(".grid_square");
    squares.forEach(square => square.addEventListener('mouseover', fill));
}

creategrid();

function fill(e) {
    e.target.style.backgroundColor = 'black';
}

function reset(e) {
    const squares = document.querySelectorAll(".grid_square");
    squares.forEach(square => square.style.backgroundColor = '');
}

const reset_button = document.querySelector("#reset-button");
reset_button.addEventListener('click', reset);

function change_size(e) {
    let new_size = prompt("Enter new size (1 - 100)", n);
    if (new_size >= 1 && new_size <= 100) {
        for (let i = 0; i < n; i++) {
            grid.removeChild(grid.firstElementChild);
        }

        n = new_size;
        creategrid();
        
    } else {
        alert("Invalid Input! Please enter an integer from 1 - 100");
    }
}

const change_size_button = document.querySelector("#change-size");
change_size_button.addEventListener('click', change_size);
