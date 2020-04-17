import Robot from './robot';
import { Direction } from '../direction/direction';

describe('Robot', () => {
    it('Initializes correctly', () => {
        const gridSize = 5;
        const robot1: Robot = new Robot(0, 0, Direction.North, gridSize);
        expect(robot1.x).toBe(0);
        expect(robot1.y).toBe(0);
        expect(robot1.facing).toBe(Direction.North);
        
        const robot2: Robot = new Robot(3, 1, Direction.West, gridSize);
        expect(robot2.x).toBe(3);
        expect(robot2.y).toBe(1);
        expect(robot2.facing).toBe(Direction.West);
    });
    
    it('Throws an error when initializing with invalid arguments', () => {
        expect(() => {
            const robot3: Robot = new Robot(10, 10, Direction.South, 2);
        }).toThrow();    
    });

    it('Moves forward in the direction currently facing', () => {
        const robot1 = new Robot(0, 1, Direction.North, 5);
        robot1.move();
        expect(robot1.y).toBe(2);

        const robot2 = new Robot(2, 3, Direction.East, 5);
        robot2.move();
        expect(robot2.x).toBe(3);

        const robot3 = new Robot(4, 1, Direction.South, 5);
        robot3.move();
        console.log(robot3.x, robot3.y)
        expect(robot3.y).toBe(0);

        const robot4 = new Robot(3, 2, Direction.West, 5);
        robot4.move();
        expect(robot4.x).toBe(2);
    });

    it('Will not move forward if on the edge', () => {
        const originalWarn = console.warn;
        console.warn = jest.fn();

        const robot1 = new Robot(0, 0, Direction.South, 5);
        robot1.move();
        expect(robot1.y).toBe(0);

        const robot2 = new Robot(0, 0, Direction.West, 5);
        robot2.move();
        expect(robot2.x).toBe(0);

        const robot3 = new Robot(4, 4, Direction.North, 5);
        robot3.move();
        expect(robot3.y).toBe(4);

        const robot4 = new Robot(4, 4, Direction.East, 5);
        robot4.move();
        expect(robot4.x).toBe(4);

        expect(console.warn).toHaveBeenCalledTimes(4);
        console.warn = originalWarn;
    });

    it('Rotates left', () => {
        const robot = new Robot(0, 0, Direction.North, 5);
        robot.rotateLeft();
        expect(robot.facing).toBe(Direction.West);
        robot.rotateLeft();
        expect(robot.facing).toBe(Direction.South);
        robot.rotateLeft();
        expect(robot.facing).toBe(Direction.East);
    });

    it('Rotates right', () => {
        const robot = new Robot(0, 0, Direction.North, 5);
        robot.rotateRight();
        expect(robot.facing).toBe(Direction.East);
        robot.rotateRight();
        expect(robot.facing).toBe(Direction.South);
        robot.rotateRight();
        expect(robot.facing).toBe(Direction.West);
    });

    it('Reports its current position', () => {
        const robot = new Robot(2, 3, Direction.South, 5);
        const originalLog = console.log;
        console.log = jest.fn();
        robot.report();
        expect(console.log).toHaveBeenCalledWith('2,3,SOUTH');
        console.log = originalLog;
    });
});
