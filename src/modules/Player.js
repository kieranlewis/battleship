const Player = (name) => {
    const _randomCoordsList = [];

    function attackEnemy(gameBoard, coords) {
        gameBoard.receiveAttack(coords);
    }

    function randomAttack(gameBoard) {
        if(_randomCoordsList.length === 100) return;

        let randomY, randomX;

        do {
            randomY = Math.floor(Math.random() * 10);
            randomX = Math.floor(Math.random() * 10);
        } while(_beenHit(randomY, randomX))

        _randomCoordsList.push([randomY, randomX]);
        gameBoard.receiveAttack([randomY, randomX]);
        
        return [randomY, randomX];
    }

    function _beenHit(y, x) {
        for(let i = 0; i < _randomCoordsList.length; i++) {
            if(_randomCoordsList[i][0] === y && _randomCoordsList[i][1] === x) {
                return true
            }
        }
        return false;
    }

    return {
        get name() {
            return name;
        },
        
        attackEnemy, randomAttack
    }
}

export { Player }