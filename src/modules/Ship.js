const Ship = (length) => {
    let hitPosition = [];

    function hit(position) {
        if(checkAcceptableHit(position)) {
            hitPosition.push(position);
        }
    }

    function isSunk() {

    }

    function checkAcceptableHit(position) {
        return position >= 1 && position <= length && !hitPosition.includes(position)
    }

    return { 
        get length() {
            return length;
        },

        get hitPosition() {
            return hitPosition;
        },

        hit, isSunk
    }
}



function checkAcceptableSize(length) {
    return length >= 2 && length <= 5;
}

export { Ship, checkAcceptableSize };