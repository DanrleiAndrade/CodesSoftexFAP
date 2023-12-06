import { Editor } from "./editor";

export class TextEditor extends Editor {
    private lines: string[] = [];

    insertLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber, 0, text);
        this.notifyObservers('insertLine', { lineNumber, text });
    }

    removeLine(lineNumber: number): void {
        const text = this.lines.splice(lineNumber, 1)[0];
        this.notifyObservers('removeLine', { lineNumber, text });
    }

    getLines(): string[] {
        return this.lines;
    }
}