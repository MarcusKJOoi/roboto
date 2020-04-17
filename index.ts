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

    move() {
        if (this.facing === Direction.North) {
            this.x
        }
        if (this.facing === Direction.East) {

        }
        if (this.facing === Direction.South) {

        }
        if (this.facing === Direction.West) {

        }
    }

    report() {
        console.log(`${this.x},${this.y},${this.facing}`);
    }
}

// If we wanted to add ordinal directions (NE/NW/SE/SW), we can fill it in easily
enum Direction { 
    North = 0,
    East = 2,
    South = 4,
    West = 6,
} 

/*
    0, 0 is the south west corner of the grid
*/
const gridSize: Number = 5;

function moveRobot() {

}

function rotateLeft() {
    
}

function rotateRight() {

}

function reportPosition() {
    // console.log(`${},${},${}`);
}

function parsePrompt(input: string, args?: Array<number>) {
    let robot: Robot;
    switch(input) {
        case 'PLACE':
            // At the moment we assume that there can only be
            // one robot on the field at any given time
            if (robot === undefined) {
                robot = new Robot(args[0], args[1], args[2]);
            } else {
                console.error('An attempt was made to place multiple robots');
            }
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
            console.log('Unrecognized command provided', input);
            break;
    }
}

function directionToEnum(direction: string): Direction | number {
    if (direction === 'NORTH') {
        return Direction.North;
    }
    if (direction === 'EAST') {
        return Direction.East;
    }
    if (direction === 'SOUTH') {
        return Direction.South;
    }
    if (direction === 'WEST') {
        return Direction.West;
    }
    console.error('Invalid direction given as input', direction);
    return -1;
}

fs.readFile('a.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
    }
    const commands: Array<string> = data.split('\n');
    commands.forEach(command => {
        const split: Array<string> = command.split(' '); // Need to handle PLACE <x,y,d> command
        let placeArguments: Array<number> = [];
        if (split.length === 2) {
            // This is a PLACE <x,y,d> command
            const values = split[1].split(',');
            placeArguments = values.map(argument => parseInt(argument, 10));
            // Convert facing direction to enum
            placeArguments[2] = directionToEnum(values[2]);
        }
        parsePrompt(split[0], placeArguments);
    })
});
