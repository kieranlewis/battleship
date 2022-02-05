const Gameboard = () => {
    let board = _createEmptyBoard();
    let _ships = []

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
            
            //keep track of ship
            const newShip = { ship, coords, alignment };
            _ships.push(newShip);
        }
    }

    function receiveAttack(coords) {
        const [y, x] = coords;

        //check to see if it hits anything
        console.log(board[y][x], _ships);
        if(board[y][x] == 'S') {
            //find out what ship has been hit

            //mark board as a hit
            board[y][x] = 'H';
        } else {
            //mark board as a miss
            board[y][x] = 'M';
        }
    }

    function _checkShipHit(hitCoords) {

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

        placeShip, receiveAttack
    }
}

export { Gameboard };