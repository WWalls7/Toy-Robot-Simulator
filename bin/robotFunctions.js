const printer = require('./printer.js');

// place the robot on the table
const placeRobot = (newCoordinates, currentCoordinates) => {
	currentCoordinates = newCoordinates;
	return currentCoordinates;
};

// get the integer value for the new direction
const getDirectionInt = (newDirection) => {
	if (newDirection === 'NORTH'){
		return 0;
	}
	else if (newDirection === 'EAST'){
		return 1;
	}
	else if (newDirection === 'SOUTH'){
		return 2;
	}
	else if (newDirection === 'WEST'){
		return 3;
	}
};

// move the robot one place in the current direction or print an error message if this move cannot be made 
const moveRobot = (currentCoordinates, currentDirection) => {
	// facing north
	if (currentDirection === 0 && currentCoordinates[1] < 4){
		currentCoordinates[1]++; 
	}
	// facing east
	else if (currentDirection === 1 && currentCoordinates[0] < 4){
		currentCoordinates[0]++; 
	}
	// facing south
	else if (currentDirection === 2 && currentCoordinates[1] > 0){
		currentCoordinates[1]--; 
	}
	// facing west
	else if (currentDirection === 3 && currentCoordinates[0] > 0){
		currentCoordinates[0]--; 
	}
	else{
		printer.printError('\nThe robot cannot move anymore in this direction.\n');
	}
};

// change the direction left or right according to the given command
const changeDirection = (commandInput, currentDirection) => {
	// currentDirection is NORTH
	if (currentDirection === 0){
		if(commandInput === 'LEFT'){
			return 'WEST'
		}
		else if(commandInput === 'RIGHT'){
			return 'EAST'
		}
	}
	// currentDirection is EAST
	else if (currentDirection === 1){
		if(commandInput === 'LEFT'){
			return 'NORTH'
		}
		else if(commandInput === 'RIGHT'){
			return 'SOUTH'
		}
	}
	// currentDirection is SOUTH
	else if (currentDirection === 2){
		if(commandInput === 'LEFT'){
			return 'EAST'
		}
		else if(commandInput === 'RIGHT'){
			return 'WEST'
		}
	}
	// currentDirection is WEST
	else if (currentDirection === 3){
		if(commandInput === 'LEFT'){
			return 'SOUTH'
		}
		else if(commandInput === 'RIGHT'){
			return 'NORTH'
		}
	}
};

// get the string value of the current direction 
const getDirectionString = (currentDirection) => {
	if (currentDirection === 0){
		return 'NORTH';
	}
	else if (currentDirection === 1){
		return 'EAST';
	}
	else if (currentDirection === 2){
		return 'SOUTH';
	}
	else if (currentDirection === 3){
		return 'WEST';
	}
};

module.exports = { placeRobot, getDirectionInt, moveRobot, changeDirection, getDirectionString };