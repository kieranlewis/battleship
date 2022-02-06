import { Gameboard } from "../modules/Gameboard";
import { Ship } from "../modules/Ship";
import { Player } from "../modules/Player";

test('players can attack the enemy gameboard (1)', () => {
    const testBoard = Gameboard();
    const p1 = Player('p1');

    p1.attackEnemy(testBoard, [0,0]);

    expect(testBoard.board[0][0]).toBe('M');
}) 

test('players can attack the enemy gameboard (2)', () => {
    const testBoard = Gameboard();
    const testShip = Ship(3);
    const p1 = Player('p1');

    testBoard.placeShip(testShip, [0,0], 'horizontal');
    p1.attackEnemy(testBoard, [0,0]);

    expect(testBoard.board[0][0]).toBe('H');
}) 

test('computer can attack the enemy with a random coordinate', () => {
    const testBoard = Gameboard();
    const cpu = Player('cpu1');

    cpu.randomAttack(testBoard);

    const test = testBoard.board.some(row => row.includes('M'));
    expect(test).toBe(true);
})

test('computer should never attack the same coordinate again', () => {
    const testBoard = Gameboard();
    const cpu = Player('cpu1');

    for(let i = 0; i < 100; i++) {
        cpu.randomAttack(testBoard);
    }
    
    console.log(testBoard.board);
    const test = testBoard.board.every(row => row.every(value => value == 'M'));
    expect(test).toBe(true);
})