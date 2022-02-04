const Ship = (length) => {
    let hitPosition = [];

    function hit(position) {
        if(checkAcceptableHit(position)) {
            hitPosition.push(position);
        }
    }

    function isSunk() {
        if(hitPosition.length !== length) return false;

        for(let i = 1; i <= length; i++) {
            if(!hitPosition.includes(i)) return false;
        }

        return true;
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