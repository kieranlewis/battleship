//const Ship = require('../modules/Ship');
import Ship from '../modules/Ship';

test('ship has the correct length when defining creating new ship', () => {
    const testShip = Ship(3);
    expect(testShip.length).toBe(3); 
})