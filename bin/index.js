#!/usr/bin/env node

const cmdFunc = require('./commandFunctions.js');
const printer = require('./printer.js');

// allows user to enter commands then executes valid commands
const prompt = () => {
    var input = process.openStdin();
    var currentCoordinates = [0,0];
    var cmdNumber= 0;
    var direction = 0;
    var userInput;
    var usable;

    input.addListener('data', function(d) {
        userInput = d.toString().trim().toUpperCase();
        usable = cmdFunc.usableOrNot(cmdNumber, userInput);

        // if the command is valid 
        if (usable) {
            cmdNumber++; 
            [direction, currentCoordinates] = cmdFunc.execute(userInput, currentCoordinates, direction);
        }
    });
};

// begin the program
const start = () => {
    printer.printStartingMessage();
    prompt();
};

start();