let gridSize = 16;

const boardCont = document.querySelector('#board-cont');
const newGridBtn = document.querySelector('#new-board');

const gridRow = document.createElement('div');
const gridCell = document.createElement('div');

gridRow.setAttribute('class', 'grid-row');
gridCell.setAttribute('class', 'grid-cell');

function createGrid(){ // add a rows to the grid with counting ids 
    for (i = gridSize; i > 0; i--) {
        let newRow = gridRow.cloneNode();
        boardCont.appendChild(newRow).setAttribute('id', i);
        insertCells(i);
    }
}

function insertCells(rowID){ // add cells to each row
    for (c = gridSize; c > 0; c--){
        let newCell = gridCell.cloneNode();
        document.getElementById(rowID).appendChild(newCell);

        const allCells = document.querySelectorAll('.grid-cell');
          
            for (const a of allCells) {
            a.addEventListener('mouseenter', function (e){
                e.stopImmediatePropagation();
                this.setAttribute("class", "grid-dark");
            });
        }

        
    }
}

function newGrid(){
    while (boardCont.firstChild){
        boardCont.removeChild(boardCont.lastChild);
    }
    gridSize = prompt("How big do you want your board? Choose between 1 and 100.");
    
    while (gridSize < 1 || gridSize > 100 || NaN(gridSize)){
        gridSize = prompt("Invalid Entry. Choose between 1 and 100.");
    }
    createGrid();
}

createGrid();

newGridBtn.addEventListener('click', newGrid());