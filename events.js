const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//new event
const myEmitter = new MyEmitter();

//event listner and event to fire
//waterlevel trigger event 
myEmitter.on('Waterlevel', () => {
    console.log('Turn off motor!');
    setTimeout(() => {
        console.log('gental reminder')
    },3000)
});

myEmitter.emit('Waterlevel');