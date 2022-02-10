function render(gameBoard) {
    const board = gameBoard.board;
    console.log(board);
    const boardDiv = document.querySelector('.player1-board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.innerText = board[i][j];
            boardDiv.appendChild(div);
            //console.log(board[i][j]);
        }
    }
}

export { render }