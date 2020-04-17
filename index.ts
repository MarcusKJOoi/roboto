import * as fs from 'fs'; 
import { directionStringToEnum } from './direction/direction';
import Robot from './robot/robot';

/*
    0, 0 is the south west corner of the grid
*/
const GRID_SIZE: number = 5;
let robot: Robot;

export function parsePrompt(input: string, args?: Array<number>) {
    switch(input) {
        case 'PLACE':
            // Assume that there can only be
            // one robot on the field at any given time
            if (robot === undefined) {
                robot = new Robot(args[0], args[1], args[2], GRID_SIZE);
            } else {
                console.warn('An attempt was made to place multiple robots.');
            }
            break;
        case 'MOVE':
            robot?.move();
            break;
        case 'LEFT':
            robot?.rotateLeft();
            break;
        case 'RIGHT':
            robot?.rotateRight();
            break;
        case 'REPORT':
            robot?.report();
            break;
        default:
            console.log('Unrecognized command provided', input);
            break;
    }
}

if (process.argv.length < 3) {
    console.error('Please provide a file name!');
} else {
    const fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', (error, data) => {
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
                placeArguments[2] = directionStringToEnum(values[2]);
            }
            parsePrompt(split[0], placeArguments);
        })
    });
}
