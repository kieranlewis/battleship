function renderBoards(playerBoard, cpuBoard) {
    const playerBoardDiv = document.querySelector('.player1-board');
    const cpuBoardDiv = document.querySelector('.player2-board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const playerDiv = document.createElement('div');
            const cpuDiv = document.createElement('div');

            playerDiv.setAttribute('class', 'grid-item');
            playerDiv.setAttribute('data-coord', [i,j]);
            playerDiv.innerText = playerBoard.board[i][j];

            cpuDiv.setAttribute('class', 'grid-item');
            cpuDiv.setAttribute('data-coord', [i,j]);
            cpuDiv.innerText = cpuBoard.board[i][j];

            playerBoardDiv.appendChild(playerDiv);
            cpuBoardDiv.appendChild(cpuDiv);
        }
    }
}

function updateBoard(gameBoard) {

}

export { renderBoards }