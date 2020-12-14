const chai = require('chai');
const expect = chai.expect;
const cmdFunc = require('../bin/commandFunctions.js');
const robotFunctions = require('../bin/robotFunctions.js');

before(() => {
    process.env.NODE_ENV = 'runningTests';
});

describe('Testing various commands', () => {
    it('Testing an invalid command, the command should be unusable', () => {
        let cmdNumber = 0;
        var userInput = "NOT A VALID COMMAND";
        var usable = cmdFunc.usableOrNot(cmdNumber, userInput);
        expect(usable).to.be.false;
    });
    it('Testing a valid command, the command should be usable', () => {
        let cmdNumber = 1;
        var userInput = "LEFT";
        var usable = cmdFunc.usableOrNot(cmdNumber, userInput);
        expect(usable).to.be.true;
    });
    it('Testing if the command is a place command, should return true if the command is a place command', () => {
        var userInput = "LEFT";
        var place = cmdFunc.placeCommand(userInput)
        expect(place).to.be.false;
        userInput = "PLACE 3,4,NORTH";
        place = cmdFunc.placeCommand(userInput)
        expect(place).to.be.true;
    });
});

describe('Testing the place command', () => {
    it('Place robot off of the table, robot should not move', () => {
        let currentCoordinates = [0,0];
        let expectedCoordinates = [0,0];
        let direction = 0;
        var userInput = "PLACE 5,5,NORTH";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[1]).to.deep.equal(expectedCoordinates);
    });
    it('Place the robot somewhere on the table, robot should move and change direction', () => {
        let currentCoordinates = [0,0];
        let expectedCoordinates = [3,4];
        let direction = 0;
        var userInput = "PLACE 3,4,SOUTH";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[1]).to.deep.equal(expectedCoordinates);
        expect(results[0]).to.equal(2);
    });
    it('Try a command that is not the PLACE command first, should return false', () => {
        var userInput = "LEFT";
        var cmdNumber = 0;
        var usable = cmdFunc.usableOrNot(cmdNumber, userInput);
        expect(usable).to.be.false;
    });
});

describe('Testing the move command', () => {
    it('Try to move the robot off of the table, robot should not move', () => {
        let currentCoordinates = [4,4];
        let expectedCoordinates = [4,4];
        let direction = 0;
        var userInput = "MOVE";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[1]).to.deep.equal(expectedCoordinates);
    });
    it('Try to move the robot in a valid direction, robot should move', () => {
        let currentCoordinates = [1,1];
        let expectedCoordinates = [1,2];
        let direction = 0;
        var userInput = "MOVE";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[1]).to.deep.equal(expectedCoordinates);
    });
    it('Try to change the position of the robot and move, robot should move', () => {
        let currentCoordinates = [1,1];
        let expectedCoordinates = [2,2];
        let direction = 0;
        var userInput = "MOVE";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        direction = results[0]
        currentCoordinates = results[1]
        userInput = "RIGHT";
        results = cmdFunc.execute(userInput, currentCoordinates, direction);
        direction = results[0]
        currentCoordinates = results[1]
        userInput = "MOVE";
        results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[1]).to.deep.equal(expectedCoordinates);
        expect(results[0]).to.equal(1);
    });
});

describe('Testing the left and right commands', () => {
    it('Try to turn the robot right, the robot should turn right', () => {
        let currentCoordinates = [0,0];
        let direction = 0;
        var userInput = "RIGHT";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[0]).to.equal(1);
    });
    it('Try to turn the robot left, the robot should turn left', () => {
        let currentCoordinates = [0,0];
        let direction = 0;
        var userInput = "LEFT";
        var results = cmdFunc.execute(userInput, currentCoordinates, direction);
        expect(results[0]).to.equal(3);
    });
});

describe('Testing the robot functions', () => {
    it('Getting the int value of the direction, should return the appropriate value', () => {
        let direction = "NORTH";
        var result = robotFunctions.getDirectionInt(direction);
        expect(result).to.equal(0);
        direction = "EAST";
        result = robotFunctions.getDirectionInt(direction);
        expect(result).to.equal(1);
        direction = "SOUTH";
        result = robotFunctions.getDirectionInt(direction);
        expect(result).to.equal(2);
        direction = "WEST";
        result = robotFunctions.getDirectionInt(direction);
        expect(result).to.equal(3);
    });
    it('Getting the string value of the direction, should return the appropriate value', () => {
        let direction = 0;
        var result = robotFunctions.getDirectionString(direction);
        expect(result).to.equal("NORTH");
        direction = 1;
        result = robotFunctions.getDirectionString(direction);
        expect(result).to.equal("EAST");
        direction = 2;
        result = robotFunctions.getDirectionString(direction);
        expect(result).to.equal("SOUTH");
        direction = 3;
        result = robotFunctions.getDirectionString(direction);
        expect(result).to.equal("WEST");
    });
});
