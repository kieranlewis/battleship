import { Gameboard } from "../modules/Gameboard";
//import { Ship } from "../modules/Ship";

test('Board size should be a 10 x 10 grid', () => {
    const testBoard = Gameboard();

    for(let i = 0; i < 10; i++) {
        expect(testBoard.board[i].length).toBe(10)
    }
})