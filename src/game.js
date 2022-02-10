import { Gameboard } from "./modules/Gameboard";
import { Ship } from "./modules/Ship";
import { Player } from "./modules/Player";
import { render } from "./modules/domManipulation";

const game = (() => {
    function init() {
        const testBoard = Gameboard();
        const player = Player('Kieran');
        const cpu = Player('Computer');
    
        const playerShip1 = Ship(2);
        const playerShip2 = Ship(3);
        const cpuShip1 = Ship(2);
        const cpuShip2 = Ship(3);
        
        render(testBoard);
    }

    return {
        init
    }
})();

export { game };

