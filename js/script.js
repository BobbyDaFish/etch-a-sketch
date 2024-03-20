let gridSize = 16;

const boardCont = document.querySelector('#board-cont');
const gridRow = document.createElement('div');
const gridCell = document.createElement('div');

gridRow.setAttribute('class', 'grid-row');
gridCell.setAttribute('class', 'grid-cell');

function createGrid(){
    for (i = gridSize; i > 0; 1--) {
        boardCont.appendChild(gridRow).setAttribute('id', i);
        insertCells(i);
    }
}

function insertCells(rowID){
    for (c = gridSize; c > 0; c--){
        document.getElementById(rowID).appendChild(gridCell);
    }
}