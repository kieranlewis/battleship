import { game } from "../game";

function renderBoards(playerBoard) {
    const playerBoardDiv = document.querySelector('.player1-board');
    const cpuBoardDiv = document.querySelector('.player2-board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const playerDiv = document.createElement('div');
            const cpuDiv = document.createElement('div');

            playerDiv.setAttribute('class', 'grid-item');
            playerDiv.setAttribute('data-coord', `${i},${j}`);
            playerDiv.setAttribute('data-player', true);

            if(playerBoard[i][j] === 'S') playerDiv.classList.add('ship');
            //playerDiv.innerText = playerBoard[i][j];

            cpuDiv.setAttribute('class', 'grid-item');
            cpuDiv.setAttribute('data-coord', `${i},${j}`);
            cpuDiv.setAttribute('data-player', false);
            cpuDiv.addEventListener('click', () => game.takeTurn([i,j]), 
                { once: true });

            playerBoardDiv.appendChild(playerDiv);
            cpuBoardDiv.appendChild(cpuDiv);
        }
    }
}

function updateBoard(gameBoard, coords, player) {
    const [y, x] = coords;
    const div = document.querySelector(`[data-player=${!player}][data-coord="${y},${x}"]`)

    if(gameBoard[y][x] === 'H') div.classList.add('hit');
    else if(gameBoard[y][x] === 'M') div.classList.add('miss');
}

export { renderBoards, updateBoard }