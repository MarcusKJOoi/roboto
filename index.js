"use strict";
exports.__esModule = true;
var fs = require("fs");
var Robot = /** @class */ (function () {
    function Robot(x, y, facing) {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }
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
var gridSize = 5; // 5 x 5 square grid
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
function parsePrompt(input) {
    var robot;
    switch (input) {
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
fs.readFile('a.txt', 'utf8', function (error, data) {
    if (error) {
        console.error(error);
    }
    var commands = data.split('\n');
    console.log(commands);
});
