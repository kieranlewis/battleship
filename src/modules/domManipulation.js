function render(player1Board, player2Board) {
    const player1BoardDiv = document.querySelector('.player1-board');
    const player2BoardDiv = document.querySelector('.player2-board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const player1Div = document.createElement('div');
            const player2Div = document.createElement('div');

            player1Div.setAttribute('class', 'grid-item');
            player1Div.setAttribute('data-coord', [i,j]);
            player1Div.innerText = player1Board.board[i][j];

            player2Div.setAttribute('class', 'grid-item');
            player2Div.setAttribute('data-coord', [i,j]);
            player2Div.innerText = player2Board.board[i][j];

            player1BoardDiv.appendChild(player1Div);
            player2BoardDiv.appendChild(player2Div);
        }
    }
}

export { render }