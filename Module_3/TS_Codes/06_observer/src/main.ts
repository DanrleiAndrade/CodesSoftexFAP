import readline from 'readline';
import { Observer } from './observer';
import { TextEditor } from './textEditor';

class TextEditorObserver implements Observer {
    update(event: string, data: any): void {
        console.log(`Event: ${event}, Data: ${JSON.stringify(data)}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const textEditor = new TextEditor();
textEditor.addObserver(new TextEditorObserver());

textEditor.notifyObservers('open', {});

rl.on('line', (input) => {
    if (input === 'EOF') {
        textEditor.notifyObservers('save', {});
        console.log(textEditor.getLines().join('\n'));
        rl.close();
    } else {
        const lineNumber = textEditor.getLines().length;
        textEditor.insertLine(lineNumber, input);
    }
});