const robotFunctions = require('./robotFunctions.js');
const printer = require('./printer.js');


// check if a command is a place command
const placeCommand = commandInput => {
    return /^PLACE [0-4],[0-4],\b(NORTH|SOUTH|EAST|WEST)\b$/.test(commandInput);
};

// check if a command is usable or not
const usableOrNot = (cmdNumber, commandInput) => {
    // check if the first command is the place command, if not print error message and return false
    if (cmdNumber === 0 && placeCommand(commandInput) === false) {
        printer.printError('\nPlease enter a valid PLACE X,Y,F command first.\n');
        return false;
    } 
    // check if command is valid, if not print error message and return false
    else if (/^\b(MOVE|LEFT|RIGHT|REPORT)\b$/.test(commandInput) === false && placeCommand(commandInput) === false) {
        printer.printError('\nPlease enter a valid command.\n');
        printer.printError('Tip: When placing the robot, make sure the coordinates are valid. Remember, the robot can only be placed from 0 to 4 in the x or y direction.\n');
        return false;
    }
    // command is valid, return true
    return true;
};

// execute a usable command
const execute = (commandInput, currentCoordinates, currentDirection) => {
    if (placeCommand(commandInput) === true){
        let instructions = commandInput.split(' ')[1].split(',');
        let newCoordinates = [parseInt(instructions[0]), parseInt(instructions[1])];
        let newDirection = instructions[2];
        currentCoordinates = robotFunctions.placeRobot(newCoordinates, currentCoordinates); 
        return [robotFunctions.getDirectionInt(newDirection), currentCoordinates];
    }
    else if(commandInput === 'MOVE'){
        robotFunctions.moveRobot(currentCoordinates, currentDirection);
        return [currentDirection, currentCoordinates]
    }
    else if(commandInput === 'LEFT' || commandInput === 'RIGHT'){
        return [robotFunctions.getDirectionInt(robotFunctions.changeDirection(commandInput, currentDirection)), currentCoordinates]; 
    }
    else if(commandInput === 'REPORT'){
        printer.printReport(currentCoordinates, robotFunctions.getDirectionString(currentDirection))
        return [currentDirection, currentCoordinates]
    }
    return [currentDirection, currentCoordinates]
};

module.exports = { usableOrNot, placeCommand, execute };