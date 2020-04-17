"use strict";
exports.__esModule = true;
var direction_1 = require("./direction");
var Robot = /** @class */ (function () {
    function Robot(x, y, facing, gridSize) {
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
    Robot.prototype.rotateLeft = function () {
        this.facing = this.facing - 1 < 0 ? 3 : this.facing - 1;
    };
    /*
        Increments robot facing enum value,
        and checks for overflow when rotating from East (3) to North (0)
    */
    Robot.prototype.rotateRight = function () {
        this.facing = this.facing + 1 % 3;
    };
    Robot.prototype.move = function () {
        switch (this.facing) {
            case direction_1.Direction.North:
                if (this.y + 1 >= this.gridSize) {
                    console.warn('Moving north would make the robot fall off, ignoring command.');
                    return;
                }
                this.y += 1;
                break;
            case direction_1.Direction.East:
                if (this.x + 1 >= this.gridSize) {
                    console.warn('Moving east would make the robot fall off, ignoring command.');
                    return;
                }
                this.x += 1;
                break;
            case direction_1.Direction.South:
                if (this.y - 1 <= 0) {
                    console.warn('Moving south would make the robot fall off, ignoring command.');
                    return;
                }
                this.y -= 1;
                break;
            case direction_1.Direction.West:
                if (this.x - 1 >= this.gridSize) {
                    console.warn('Moving west would make the robot fall off, ignoring command.');
                    return;
                }
                this.x -= 1;
                break;
            default:
                break;
        }
    };
    Robot.prototype.report = function () {
        console.log(this.x + "," + this.y + "," + direction_1.directionEnumToString(this.facing));
    };
    return Robot;
}());
exports["default"] = Robot;
