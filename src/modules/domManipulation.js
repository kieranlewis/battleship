function render(gameBoard, player) {
    const board = gameBoard.board;
    const boardDiv = document.querySelector(`.player${player}-board`);
    boardDiv.innerHTML = '';

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid-item');
            div.setAttribute('data-coord', [i,j]);
            div.setAttribute('data-player', player);
            div.innerText = board[i][j];

            div.addEventListener('click', _attack)

            boardDiv.appendChild(div);
        }
    }
}

function _attack() {
    console.log(this.getAttribute('data-coord'))
}

export { render }