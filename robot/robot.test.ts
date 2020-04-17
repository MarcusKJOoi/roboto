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
});
