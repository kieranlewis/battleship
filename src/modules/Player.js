const Player = (name) => {
    function attackEnemy(gameBoard, coords) {
        gameBoard.receiveAttack(coords);
    }

    return {
        get name() {
            return name;
        },
        
        attackEnemy
    }
}

export { Player }