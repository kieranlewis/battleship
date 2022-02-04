const Gameboard = () => {
    let board = _createEmptyBoard();

    function placeShip(ship, coords) {
        const [x, y] = coords;
        
        if(_checkShipPlacement(ship, coords)) {
            for(let i = 0; i < ship.length; i++) {
                board[x][y+i] = 'S';
            }
        }
    }

    function _checkShipPlacement(ship, coords) {
        const [x, y] = coords
        //check ship does not exceed boundary of board
        if(ship.length + y > 10) return false;

        return true;
    }

    function _createEmptyBoard() {
        let board = [];
        for(let i = 0; i < 10; i++) {
            board.push(new Array(10).fill(''));
        }

        return board;
    }

    return {
        get board() {
            return board;
        },

        placeShip
    }
}

export { Gameboard };