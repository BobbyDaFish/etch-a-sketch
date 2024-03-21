let gridSize = 16;

const boardCont = document.querySelector('#board-cont');
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


createGrid();