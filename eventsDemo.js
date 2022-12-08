var events = require('events');// using in built module events
var eventEmitter = new events.EventEmitter();//es6(ecmascript version 6):
//eventemitter helps us to create events or features of an event from one or more events

//Create an event handler:lts(long time support)
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var myEventHandler1 = function () {
  console.log('I hear a scream2!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);// giving the name to the eventemitter1

eventEmitter.on('scream2', myEventHandler1);//// giving the name to the eventemitter2

//Fire the 'scream' event and the scream2 event : event chaining
eventEmitter.emit('scream');// calling the function with the name given to the eventemitter1

eventEmitter.emit('scream2');/// calling the function with the name given to the eventemitter2