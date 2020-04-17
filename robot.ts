export default class Robot {
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