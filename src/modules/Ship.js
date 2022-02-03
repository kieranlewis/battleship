const Ship = (length) => {
    return { length }
}

function checkAcceptableSize(length) {
    return length >= 2 && length <= 5;
}

export { Ship, checkAcceptableSize };

//export default Ship;