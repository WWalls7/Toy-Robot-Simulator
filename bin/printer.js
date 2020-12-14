const chalk = require('chalk');
const figlet = require('figlet');

// print the message that shows up when the program is started
const printStartingMessage = () => {
	console.log(
        chalk.blue(
            figlet.textSync('Toy Robot Simulator', {
                font: 'big',
            })
        )
    );
    console.log(chalk.blue('\nFirst enter the command to place the robot on the 5x5 table:\n'));
    console.log(chalk.green('PLACE X,Y,F\n'));
    console.log(chalk.blue('Where X and Y are coordinates from 0-5 and F is the direction (NORTH, SOUTH, EAST, or WEST) to face.\n'));
    console.log(chalk.blue('\nThen enter one of the following commands to move the robot or print a report:\n'));
    console.log(chalk.green('PLACE X,Y,F\nLEFT\nRIGHT\nMOVE\nREPORT\n'));
    console.log(chalk.blue('\nEnter a command or CTRL+C at any time to stop:\n'));
};

// print an error message
const printError = (message) => {
    if (process.env.NODE_ENV !== 'runningTests') {
        console.log(chalk.red(message));
    }
};

// print a robot's report
const printReport = (currentCoordinates, currentDirection) => {
    console.log(chalk.cyan('\nYour coordinates are: '+ currentCoordinates[0] + ', ' + currentCoordinates[1]));
    console.log(chalk.cyan('and you are facing: ' + currentDirection));
};

module.exports = { printError, printStartingMessage, printReport };