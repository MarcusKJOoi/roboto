export enum Direction { 
    North = 0,
    East = 1,
    South = 2,
    West = 3,
}

// Converts a direction from string to its corresponding enum value
export function directionStringToEnum(directionString: string): Direction {
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
    throw new Error(`Invalid direction given as input: ${directionString}`);
}

// Converts a given enum value to its string representation
export function directionEnumToString(directionEnum: Direction): string {
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
