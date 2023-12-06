export interface Strategy {
    execute(a: number, b: number): number;
}

export class Addition implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

export class Subtraction implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

export class Multiplication implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}