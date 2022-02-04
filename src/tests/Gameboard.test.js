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

    testBoard.placeShip(testShip, [0,0], 'horizontal');
    expect(testBoard.board[0]).toStrictEqual(['S','S','S','','','','','','','']);
})

test('Can place down a ship on the board (2)', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip(testShip, [2,3], 'horizontal');
    expect(testBoard.board[2]).toStrictEqual(['','','','S','S','S','S','','','']);
})

test('Can place multiple ships on the board', () => {
    const testBoard = Gameboard();
    const testShip1 = Ship(2);
    const testShip2 = Ship(2);

    testBoard.placeShip(testShip1, [5,3], 'horizontal');
    testBoard.placeShip(testShip2, [5,7], 'horizontal');
    expect(testBoard.board[5]).toStrictEqual(['','','','S','S','','','S','S','']);
})

test('Can not place ships if they will not fit on the co ordinates', () => {
    const testBoard = Gameboard();
    const testShip = Ship(4);

    testBoard.placeShip(testShip, [0,8], 'horizontal');
    expect(testBoard.board[0]).toStrictEqual(['','','','','','','','','','']);
})

test('A newly placed ship can not go onto an occupied space', () => {
    const testBoard = Gameboard();
    const testShip1 = Ship(4);
    const testShip2 = Ship(2);

    testBoard.placeShip(testShip1, [0,1], 'horizontal');
    testBoard.placeShip(testShip2, [0,0], 'horizontal');
    expect(testBoard.board[0]).toStrictEqual(['','S','S','S','S','','','','','']);
})

test('can place ships vertically', () => {
    const testBoard = Gameboard();
    const testShip1 = Ship(2);
    const testShip2 = Ship(3);

    testBoard.placeShip(testShip1, [0,9], 'vertical');
    testBoard.placeShip(testShip2, [0,2], 'horizontal');

    expect(testBoard.board[0][9]).toBe('S');
    expect(testBoard.board[1][9]).toBe('S');
    expect(testBoard.board[0]).toStrictEqual(['','','S','S','S','','','','','S'])
})

test('vertical ships cant be placed out of boundary', () => {
    const testBoard = Gameboard();
    const testShip = Ship(2);

    testBoard.placeShip(testShip,[9,0], 'vertical');

    expect(testBoard.board[9]).toStrictEqual(['','','','','','','','','','']);
})