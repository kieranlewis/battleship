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

test('board is updated when a ship is hit', () => {
    const testBoard = Gameboard();
    const testShip = Ship(2);

    testBoard.placeShip(testShip, [0,0], 'horizontal');
    testBoard.receiveAttack([0,0]);

    expect(testBoard.board[0][0]).toBe('H');
})

test('board is updated when a ship is missed', () => {
    const testBoard = Gameboard();
    const testShip = Ship(2);

    testBoard.placeShip(testShip, [0,0], 'horizontal');
    testBoard.receiveAttack([0,3]);

    expect(testBoard.board[0][3]).toBe('M');
})

test('can hit a ship if there is one on the given coordinates', () => {
    const testBoard = Gameboard();
    const testShip = Ship(2);

    testBoard.placeShip(testShip, [0,0], 'horizontal');
    testBoard.receiveAttack([0,1]);

    expect(testShip.hitPosition).toStrictEqual([2]);
})

test('can hit a vertically placed ship', () => {
    const testBoard = Gameboard();
    const testShip = Ship(3);

    testBoard.placeShip(testShip, [0,0], 'vertical');
    testBoard.receiveAttack([2,0]);

    expect(testShip.hitPosition).toStrictEqual([3]);
})

test('report that all ships have been sunk correctly', () => {
    const testBoard = Gameboard();
    const testShip1 = Ship(2);
    const testShip2 = Ship(2);

    testBoard.placeShip(testShip1, [0,0], 'horizontal');
    testBoard.placeShip(testShip2, [2,2], 'horizontal');

    testBoard.receiveAttack([0,0]);
    testBoard.receiveAttack([0,1]);
    testBoard.receiveAttack([2,2]);
    testBoard.receiveAttack([2,3]);

    expect(testBoard.checkAllShipsSunk()).toBe(true);
})

test('report that all ships have not been sunk', () => {
    const testBoard = Gameboard();
    const testShip1 = Ship(2);
    const testShip2 = Ship(2);

    testBoard.placeShip(testShip1, [0,0], 'horizontal');
    testBoard.placeShip(testShip2, [2,2], 'horizontal');

    testBoard.receiveAttack([0,0]);
    testBoard.receiveAttack([2,2]);
    testBoard.receiveAttack([2,3]);

    expect(testBoard.checkAllShipsSunk()).toBe(false);
})
