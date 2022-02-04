import { Ship, checkAcceptableSize } from '../modules/Ship';

test('ship has the correct length when defining creating new ship', () => {
    const testShip = Ship(3);
    expect(testShip.length).toBe(3); 
})

test('ship cant be of length less than 2', () => {
    expect(checkAcceptableSize(1)).toBe(false);
})

test('ship cant be of length greater than 5', () => {
    expect(checkAcceptableSize(6)).toBe(false);
})

test('hit the correct position on a ship', () => {
    const testShip = Ship(4);
    testShip.hit(1);
    expect(testShip.hitPosition).toStrictEqual([1]);
})

test('ship cannot be hit in the same place twice', () => {
    const testShip = Ship(4);
    testShip.hit(2);
    testShip.hit(2);
    expect(testShip.hitPosition).toStrictEqual([2]);
})

test('ship can be hit in different positions', () => {
    const testShip = Ship(3);
    testShip.hit(1);
    testShip.hit(3);
    expect(testShip.hitPosition).toStrictEqual([1,3]);
})

test('ship can not hit a position it wont have', () => {
    const testShip = Ship(4);
    testShip.hit(5);
    expect(testShip.hitPosition).toStrictEqual([]);
})

test('ship will be sunk when it is hit in all positions', () => {
    const testShip = Ship(2);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(true);
})

test('ship will not be sunk if it is hit the correct amount of times but in the wrong position', () => {
    const testShip = Ship(2);
    testShip.hit(2);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(false);
})