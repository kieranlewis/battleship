import { Gameboard } from "../modules/Gameboard";
import { Ship } from "../modules/Ship";

test('Board size should be a 10 x 10 grid', () => {
    const testBoard = Gameboard();

    for(let i = 0; i < 10; i++) {
        expect(testBoard.board[i].length).toBe(10)
    }
})

test('Can place down a ship on the board (1)', () => {
    const testBoard = Gameboard();
    const testShip = Ship(3);

    testBoard.placeShip(testShip, [0,0]);
    expect(testBoard.board[0]).toStrictEqual(['S','S','S','','','','','','','']);
})

test('Can place down a ship on the board (2)', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip(testShip, [2,3]);
    expect(testBoard.board[2]).toStrictEqual(['','','','S','S','S','S','','','']);
})