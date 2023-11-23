import { Strategy } from "./strategy";

export class Calculator {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}