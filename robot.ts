import { Direction, directionEnumToString } from './direction';

export default class Robot {
    x: number;
    y: number;
    facing: Direction;
    gridSize: number;

    constructor(x: number, y: number, facing: Direction, gridSize: number) {
        if (x < 0 || x >= gridSize) {
            throw new Error('Invalid X placement provided for robot!');
        }
        if (y < 0 || y >= gridSize) {
            throw new Error('Invalid Y placement provided for robot!');
        }
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.gridSize = gridSize;
    }

    move() {
    //     switch(this.facing) {
    //         case Direction.North:
    //             if ()
    //             break;
    //         case Direction.North:
    //             if ()
    //             break;
    //         case Direction.North:
    //             if ()
    //             break;
    //         case Direction.North:
    //             if ()
    //             break;
    //         default:
    //             break;
    //     }
    }

    report() {
        console.log(`${this.x},${this.y},${directionEnumToString(this.facing)}`);
    }
}