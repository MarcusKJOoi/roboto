import { parsePrompt } from './index';
import Robot from './robot/robot';

jest.mock('./robot/robot');

const originalWarn = console.warn;

describe('Toy robot', () => {
    beforeEach(() => {
        console.warn = jest.fn();
    });

    afterEach(() => {
        console.warn = originalWarn;
    });

    test('Parses commands given correctly', () => {
        parsePrompt('PLACE', [0, 0, 1]);
        expect(Robot).toHaveBeenCalledTimes(1);

        const robot = Robot.mock.instances[0];
        const mockMove = robot.move;
        const mockRotateLeft = robot.rotateLeft;
        const mockRotateRight = robot.rotateRight;
        const mockReport = robot.report;  
  
        parsePrompt('MOVE');
        expect(mockMove).toHaveBeenCalledTimes(1);

        parsePrompt('LEFT');
        expect(mockRotateLeft).toHaveBeenCalledTimes(1);

        parsePrompt('RIGHT');
        expect(mockRotateRight).toHaveBeenCalledTimes(1);
        
        parsePrompt('REPORT');
        expect(mockReport).toHaveBeenCalledTimes(1);
    });

    test('Warns when placing multiple robots', () => {
        parsePrompt('PLACE', [0, 0, 1]);
        parsePrompt('PLACE', [2, 4, 2]);

        expect(Robot).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalled();
    });
});
