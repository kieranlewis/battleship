const Gameboard = () => {
    let board = createEmptyBoard();

    function createEmptyBoard() {
        let board = []
        for(let i = 0; i < 10; i++) {
            board.push(new Array(10).fill(''));
        }

        return board
    }

    return {
        get board() {
            return board;
        }
    }
}

export { Gameboard };