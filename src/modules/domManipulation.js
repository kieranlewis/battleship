import { game } from "../game";

function renderBoards(playerBoard, cpuBoard) {
    const playerBoardDiv = document.querySelector('.player1-board');
    const cpuBoardDiv = document.querySelector('.player2-board');

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            const playerDiv = document.createElement('div');
            const cpuDiv = document.createElement('div');

            playerDiv.setAttribute('class', 'grid-item');
            playerDiv.setAttribute('data-coord', `${i},${j}`);
            playerDiv.setAttribute('data-player', true);
            playerDiv.innerText = playerBoard[i][j];

            cpuDiv.setAttribute('class', 'grid-item');
            cpuDiv.setAttribute('data-coord', `${i},${j}`);
            cpuDiv.setAttribute('data-player', false);
            cpuDiv.addEventListener('click', () => {
                game.takeTurn([i,j]);
            });
            cpuDiv.innerText = cpuBoard[i][j];

            playerBoardDiv.appendChild(playerDiv);
            cpuBoardDiv.appendChild(cpuDiv);
        }
    }
}

function updateBoard(gameBoard, coords, player) {
    const [y, x] = coords;
    const div = document.querySelector(`[data-player=${player}][data-coord="${y},${x}"]`)
    div.innerText = gameBoard[y][x];
}

export { renderBoards, updateBoard }