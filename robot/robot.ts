import { Direction, directionEnumToString } from '../direction/direction';

export default class Robot {
    x: number;
    y: number;
    facing: Direction;
    gridSize: number;

    constructor(x: number, y: number, facing: Direction, gridSize: number) {
        if (x < 0 || x >= gridSize) {
            throw new Error('Invalid initial X placement provided for robot!');
        }
        if (y < 0 || y >= gridSize) {
            throw new Error('Invalid inital Y placement provided for robot!');
        }
        this.x = x;
        this.y = y;
        this.facing = facing;
        if (this.gridSize < 1) {
            throw new Error('Invalid grid size given as argument!');
        }
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
                    console.warn(`Moving north from ${this.x}, ${this.y} is not allowed.`);
                    return;
                }
                this.y += 1;
                break;
            case Direction.East:
                if (this.x + 1 >= this.gridSize) {
                    console.warn(`Moving east from ${this.x}, ${this.y} is not allowed.`);
                    return;
                }
                this.x += 1;
                break;
            case Direction.South:
                if (this.y - 1 < 0) {
                    console.warn(`Moving south from ${this.x}, ${this.y} is not allowed.`);
                    return;
                }
                this.y -= 1;
                break;
            case Direction.West:
                if (this.x - 1 < 0) {
                    console.warn(`Moving west from ${this.x}, ${this.y} is not allowed.`);
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