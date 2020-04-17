import { Direction, directionStringToEnum, directionEnumToString } from './direction';

describe('Direction', () => {
    it('Converts direction string to enum', () => {
        const north = directionStringToEnum('NORTH');
        expect(north).toBe(Direction.North);
        
        const south = directionStringToEnum('SOUTH');
        expect(south).toBe(Direction.South);
    });

    it('Converts direction enum to string', () => {
        const east = directionEnumToString(Direction.East);
        expect(east).toBe('EAST');

        const west = directionEnumToString(Direction.West);
        expect(west).toBe('WEST');
    });

    it('Throws an error when providing an invalid direction string', () => {
        expect(() => {
            const result = directionStringToEnum('ABCDE');
        }).toThrow();
    });
});