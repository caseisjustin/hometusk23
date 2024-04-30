import events, {EventEmitter} from 'events';
import os from "os";
import process from 'process';

const eventDispatcher = new EventEmitter();

const writeInputToConsole = data => console.log('Received data:', data);

eventDispatcher.on('dataReceived', writeInputToConsole);

let newData = 'This is a new row of data';
process.stdin.on('data', data => {
    newData = data
    process.exit();
})
eventDispatcher.emit('dataReceived', newData);
