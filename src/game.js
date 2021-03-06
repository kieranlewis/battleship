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

        const playerShips = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
        const cpuShips = [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
        /*
        playerBoard.placeShip(playerShips[0], [0,0], 'horizontal');
        playerBoard.placeShip(playerShips[1], [2,2], 'vertical');

        cpuBoard.placeShip(cpuShips[0], [0,0], 'vertical');
        cpuBoard.placeShip(cpuShips[1], [2,2], 'horizontal');*/
        
        playerBoard.placeRandomShips(playerShips);
        cpuBoard.placeRandomShips(cpuShips);
        console.log(playerBoard.board, cpuBoard.board);
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

