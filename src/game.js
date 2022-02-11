import { Gameboard } from "./modules/Gameboard";
import { Ship } from "./modules/Ship";
import { Player } from "./modules/Player";
import { renderBoards, updateBoard } from "./modules/domManipulation";

const game = (() => {
    function init() {
        const playerBoard = Gameboard();
        const cpuBoard = Gameboard();
        const player = Player('Kieran');
        const cpu = Player('Computer');
    
        const playerShip1 = Ship(2);
        const playerShip2 = Ship(3);
        const cpuShip1 = Ship(2);
        const cpuShip2 = Ship(3);

        playerBoard.placeShip(playerShip1, [0,0], 'horizontal');
        playerBoard.placeShip(playerShip2, [2,2], 'vertical');

        cpuBoard.placeShip(cpuShip1, [0,0], 'vertical');
        cpuBoard.placeShip(cpuShip2, [2,2], 'horizontal');

        renderBoards(playerBoard.board, cpuBoard.board);

        /* test
        player.attackEnemy(cpuBoard, [1,1]);
        console.log(cpuBoard.board);
        updateBoard(cpuBoard.board, [1,1], true);
        */
    }

    return {
        init
    }
})();

export { game };

