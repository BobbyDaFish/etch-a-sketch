let gridSize = 16;

const boardCont = document.querySelector('#board-cont');
const newGridBtn = document.querySelector('#new-board');

function createGrid(){ // add a rows to the grid with counting ids 
    for (i = gridSize; i > 0; i--) {
        const gridRow = document.createElement('div');
        
        gridRow.setAttribute('class', 'grid-row');

        boardCont.appendChild(gridRow).setAttribute('id', i);
        insertCells(i);
        const allCells = document.querySelectorAll('.grid-cell');
          
        for (const a of allCells) { // add listener to each cell to add class to change color.
        a.addEventListener('mouseenter', function (e){
            e.stopImmediatePropagation();
            this.setAttribute("class", "grid-dark");
        });
    }
    }
}

function insertCells(rowID){ // add cells to each row
    for (c = gridSize; c > 0; c--){
        const gridCell = document.createElement('div');
        gridCell.setAttribute('class', 'grid-cell');

        document.getElementById(rowID).appendChild(gridCell);
    }

}

createGrid();

newGridBtn.addEventListener('click', function (){ // new board button to start a new board
        
        while (boardCont.firstChild){  //remove original board
            boardCont.removeChild(boardCont.lastChild);
        }
        
        gridSize = prompt("Choose a board size between 1 and 100."); // user input for size
        
        while (gridSize < 1 || gridSize > 100 || isNaN(gridSize)){
            gridSize = prompt("Invalid Entry. Choose between 1 and 100.");
        }
        
        createGrid();
    
});