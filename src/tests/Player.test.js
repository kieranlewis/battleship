import { Gameboard } from "../modules/Gameboard";
import { Ship } from "../modules/Ship";
import { Player } from "../modules/Player";

test('players can attack the enemy gameboard', () => {
    const testBoard = Gameboard();
    const p1 = Player('p1');

    p1.attackEnemy(testBoard, [0,0]);
    console.log(testBoard.board);
    expect(testBoard.board[0][0]).toBe('M');
}) 