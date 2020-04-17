"use strict";
exports.__esModule = true;
var fs = require("fs");
var direction_1 = require("./direction/direction");
var robot_1 = require("./robot/robot");
/*
    0, 0 is the south west corner of the grid
*/
var GRID_SIZE = 5;
var robot;
function parsePrompt(input, args) {
    var _a, _b, _c, _d;
    switch (input) {
        case 'PLACE':
            // Assume that there can only be
            // one robot on the field at any given time
            if (robot === undefined) {
                robot = new robot_1["default"](args[0], args[1], args[2], GRID_SIZE);
            }
            else {
                console.warn('An attempt was made to place multiple robots.');
            }
            break;
        case 'MOVE':
            (_a = robot) === null || _a === void 0 ? void 0 : _a.move();
            break;
        case 'LEFT':
            (_b = robot) === null || _b === void 0 ? void 0 : _b.rotateLeft();
            break;
        case 'RIGHT':
            (_c = robot) === null || _c === void 0 ? void 0 : _c.rotateRight();
            break;
        case 'REPORT':
            (_d = robot) === null || _d === void 0 ? void 0 : _d.report();
            break;
        default:
            console.log('Unrecognized command provided', input);
            break;
    }
}
exports.parsePrompt = parsePrompt;
if (process.argv.length < 3) {
    console.error('Please provide a file name!');
}
else {
    var fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', function (error, data) {
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
                placeArguments[2] = direction_1.directionStringToEnum(values[2]);
            }
            parsePrompt(split[0], placeArguments);
        });
    });
}
