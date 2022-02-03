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