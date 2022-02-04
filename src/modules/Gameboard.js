const Gameboard = () => {
    let board = _createEmptyBoard();

    function placeShip(ship, coords) {
        const [y, x] = coords;
        
        if(_checkShipPlacement(ship, coords)) {
            for(let i = 0; i < ship.length; i++) {
                board[y][x+i] = 'S';
            }
        }
    }

    function _checkShipPlacement(ship, coords) {
        const [y, x] = coords
        //check ship does not exceed boundary of board
        if(ship.length + x > 10) return false;

        //check ship does not try to occupy a space with a ship already on it
        for(let i = x; i < x + ship.length; i++) {
            if(board[y][i] == 'S') return false;
        }
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