import { Observer } from "./observer";

export class Editor {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(event: string, data: any): void {
        for (const observer of this.observers) {
            observer.update(event, data);
        }
    }
}