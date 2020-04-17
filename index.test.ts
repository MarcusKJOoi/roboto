import { parsePrompt } from './index';
import Robot from './robot/robot';

jest.mock('./robot/robot');

describe('Toy robot', () => {
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
});
