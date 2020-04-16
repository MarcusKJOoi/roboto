import * as fs from 'fs';

class Robot {
    x: number;
    y: number;
    facing: Direction;

    constructor(x: number, y: number, facing: Direction) {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }
}

// If we wanted to add ordinal directions (NE/NW/SE/SW), we can fill it in easily
enum Direction { 
    North = 0,
    East = 2,
    South = 4,
    West = 6,
} 

const gridSize: Number = 5; // 5 x 5 square grid

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

function parsePrompt(input: string) {
    let robot: Robot;
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

fs.readFile('a.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
    }
    const commands: Array<string> = data.split('\n');
    console.log(commands);
});
