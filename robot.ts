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

    /*
        Decrements robot facing enum value, 
        unless rotating from North (0) to East (3) 
    */
    rotateLeft() {
        this.facing = this.facing - 1 < 0 ? 3 : this.facing - 1;
    }

    /*
        Increments robot facing enum value,
        and checks for overflow when rotating from East (3) to North (0)
    */
    rotateRight() {
        this.facing = this.facing + 1 % 3;
    }

    move() {
        switch(this.facing) {
            case Direction.North:
                if (this.y + 1 >= this.gridSize) {
                    console.warn('Moving north would make the robot fall off, ignoring command.');
                    return;
                }
                this.y += 1;
                break;
            case Direction.East:
                if (this.x + 1 >= this.gridSize) {
                    console.warn('Moving east would make the robot fall off, ignoring command.');
                    return;
                }
                this.x += 1;
                break;
            case Direction.South:
                if (this.y - 1 <= 0) {
                    console.warn('Moving south would make the robot fall off, ignoring command.');
                    return;
                }
                this.y -= 1;
                break;
            case Direction.West:
                if (this.x - 1 >= this.gridSize) {
                    console.warn('Moving west would make the robot fall off, ignoring command.');
                    return;
                }
                this.x -= 1;
                break;
            default:
                break;
        }
    }

    report() {
        console.log(`${this.x},${this.y},${directionEnumToString(this.facing)}`);
    }
}