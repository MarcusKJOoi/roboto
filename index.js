"use strict";
exports.__esModule = true;
var fs = require("fs");
var Robot = /** @class */ (function () {
    function Robot(x, y, facing) {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }
    Robot.prototype.move = function () {
        if (this.facing === Direction.North) {
            this.x;
        }
        if (this.facing === Direction.East) {
        }
        if (this.facing === Direction.South) {
        }
        if (this.facing === Direction.West) {
        }
    };
    Robot.prototype.report = function () {
        console.log(this.x + "," + this.y + "," + this.facing);
    };
    return Robot;
}());
// If we wanted to add ordinal directions (NE/NW/SE/SW), we can fill it in easily
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 4] = "South";
    Direction[Direction["West"] = 6] = "West";
})(Direction || (Direction = {}));
/*
    0, 0 is the south west corner of the grid
*/
var gridSize = 5;
function moveRobot() {
}
function rotateLeft() {
}
function rotateRight() {
}
function reportPosition() {
    // console.log(`${},${},${}`);
}
function parsePrompt(input, args) {
    var robot;
    switch (input) {
        case 'PLACE':
            // At the moment we assume that there can only be
            // one robot on the field at any given time
            if (robot === undefined) {
                robot = new Robot(args[0], args[1], args[2]);
            }
            else {
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
function directionToEnum(direction) {
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
fs.readFile('a.txt', 'utf8', function (error, data) {
    if (error) {
        console.error('Error reading file:', error);
    }
    var commands = data.split('\n');
    commands.forEach(function (command) {
        var split = command.split(' '); // Need to handle PLACE <x,y,d> command
        var placeArguments = [];
        if (split.length === 2) {
            // This is a PLACE <x,y,d> command
            var values = split[1].split(',');
            placeArguments = values.map(function (argument) { return parseInt(argument, 10); });
            // Convert facing direction to enum
            placeArguments[2] = directionToEnum(values[2]);
        }
        parsePrompt(split[0], placeArguments);
    });
});
