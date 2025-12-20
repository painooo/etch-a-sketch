const grid = document.querySelector("#grid");
const setGridSize = document.querySelector("#setGridSize");
setGridSize.addEventListener('click', () => {
    let size = parseInt(prompt('How big should a side be?'));
    if (size <= 100){
        removeGrid();
        makeGrid(size);
    }
});
function makeGrid(size){
    for (i=1;i<=(size);i++){
        const cellY = grid.appendChild(document.createElement('div'));
        cellY.classList.add("cellY");
            for (j=1;j<=(size);j++){
                const cellX = cellY.appendChild(document.createElement('div'));
                cellX.addEventListener('mouseover', () => {
                    cellX.style['background']='blue';
                });
                cellX.classList.add("cellX");
            }
    }
}
function removeGrid(){
    (document.querySelectorAll('.cellY')).forEach((cell) => cell.remove());
}