import { Gameboard } from "./modules/Gameboard";
import { Ship } from "./modules/Ship";
import { Player } from "./modules/Player";

const game = (() => {
    function init() {
        const testBoard = Gameboard();
        console.log(testBoard.board);
    }

    return {
        init
    }
})();

export { game };

