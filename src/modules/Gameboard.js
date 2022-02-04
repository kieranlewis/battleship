const Gameboard = () => {
    let board = _createEmptyBoard();

    function placeShip(ship, coords, alignment) {
        const [y, x] = coords;

        if(_checkShipPlacement(ship, coords, alignment)) {
            if(alignment == 'horizontal') {
                for(let i = 0; i < ship.length; i++) {
                    board[y][x+i] = 'S';
                }
            } else {
                for(let i = 0; i < ship.length; i++) {
                    board[y+i][x] = 'S';
                }
            }    
        }
    }

    function _checkShipPlacement(ship, coords, alignment) {
        const [y, x] = coords;
        
        if(alignment == 'horizontal') {
            //check ship does not exceed boundary of board
            if(ship.length + x > 10) return false;

            //check ship does not try to occupy a space with a ship already on it
            for(let i = x; i < x + ship.length; i++) {
                if(board[y][i] == 'S') return false;
            }
        } else {
            if(ship.length + y > 10) return false;

            for(let i = y; i < y + ship.length; i++) {
                if(board[i][x] == 'S') return false;
            }
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