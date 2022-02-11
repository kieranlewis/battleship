import { Gameboard } from "./modules/Gameboard";
import { Ship } from "./modules/Ship";
import { Player } from "./modules/Player";
import { renderBoards, updateBoard } from "./modules/domManipulation";

const game = (() => {
    let player, cpu, playerBoard, cpuBoard;

    function init() {
        // initial setup of game
        playerBoard = Gameboard();
        cpuBoard = Gameboard();
        player = Player('Kieran');
        cpu = Player('Computer');
    
        const playerShip1 = Ship(2);
        const playerShip2 = Ship(3);
        const cpuShip1 = Ship(2);
        const cpuShip2 = Ship(3);

        playerBoard.placeShip(playerShip1, [0,0], 'horizontal');
        playerBoard.placeShip(playerShip2, [2,2], 'vertical');

        cpuBoard.placeShip(cpuShip1, [0,0], 'vertical');
        cpuBoard.placeShip(cpuShip2, [2,2], 'horizontal');

        renderBoards(playerBoard.board);
    }

    function takeTurn(coords) {
        // player attacks cpu
        player.attackEnemy(cpuBoard, coords);
        updateBoard(cpuBoard.board, coords, true);

        // cpu attacks player
        let cpuCoords = cpu.randomAttack(playerBoard);
        updateBoard(playerBoard.board, cpuCoords, false);

        _checkWin(playerBoard, cpuBoard);
    }

    function _checkWin(board1, board2) {
        if(board2.checkAllShipsSunk()) alert('You won congrats!!!');
        else if (board1.checkAllShipsSunk()) alert('You have lost!!!');
    }

    return {
        init, takeTurn
    }
})();

export { game };

