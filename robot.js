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
    Robot.prototype.move = function () {
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
    };
    Robot.prototype.report = function () {
        console.log(this.x + "," + this.y + "," + direction_1.directionEnumToString(this.facing));
    };
    return Robot;
}());
exports["default"] = Robot;
