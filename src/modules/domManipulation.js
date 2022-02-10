function render(gameBoard) {
    const board = gameBoard.board;
    const boardDiv = document.querySelector('.board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            console.log(board[i][j]);
        }
    }
}

export { render }