// X is used for North (1) / South (-1), Y is used for East (1) / West (-1)
const facingDirection = { X: 0, Y: 0 }; 

const gridSize = 5; // 5 x 5 square grid

function placeRobot() {

}

function moveRobot() {

}

function rotateLeft() {
    
}

function rotateRight() {

}

function invalidInput() {
    console.error('Invalid input was given!');
} 

function reportPosition() {
    // console.log(`${},${},${}`);
}

function parsePrompt(input) {
    switch(input) {
        case 'PLACE':
            placeRobot();
            break;
        case 'MOVE':
            moveRobot();
            break;
        case 'LEFT':
            rotateLeft();
            break;
        case 'RIGHT':
            rotateRight();
            break;
        case 'REPORT':
            reportPosition();
            break;
        default:
            break;
    }
}