const Gameboard = () => {
    let board = _createEmptyBoard();

    function placeShip(ship, coords) {
        const [x, y] = coords;
        
        for(let i = 0; i < ship.length; i++) {
            board[x][y+i] = 'S';
        }
        //console.log(board);
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