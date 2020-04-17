"use strict";
exports.__esModule = true;
// If we wanted to add ordinal directions (NE/NW/SE/SW), we can fill it in easily
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 4] = "South";
    Direction[Direction["West"] = 6] = "West";
})(Direction = exports.Direction || (exports.Direction = {}));
// Converts a direction from string to its corresponding enum value
function directionStringToEnum(directionString) {
    if (directionString === 'NORTH') {
        return Direction.North;
    }
    if (directionString === 'EAST') {
        return Direction.East;
    }
    if (directionString === 'SOUTH') {
        return Direction.South;
    }
    if (directionString === 'WEST') {
        return Direction.West;
    }
    throw new Error("Invalid direction given as input: " + directionString);
}
exports.directionStringToEnum = directionStringToEnum;
// Converts a given enum value to its string representation
function directionEnumToString(directionEnum) {
    if (directionEnum === Direction.North) {
        return 'NORTH';
    }
    if (directionEnum === Direction.East) {
        return 'EAST';
    }
    if (directionEnum === Direction.South) {
        return 'SOUTH';
    }
    if (directionEnum === Direction.West) {
        return 'WEST';
    }
}
exports.directionEnumToString = directionEnumToString;
