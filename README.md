# Toy-Robot-Simulator
This is a Node.js CLI toy robot simulator in which a toy robot can be placed on and move within a 5x5 unit tabletop.  

# Installation and Running
1. install the simulator by running the command `npm install` or `npm install -g` to install it globally  
2. run the simulator with the command `robot-simulator`  

# Simulator Description
- The robot can move anywhere on the 5x5 unit square tabletop  
- There are no other obstructions on the table surface  
- The robot may move anywhere within the table surface, but it is not able to fall off the table surface  
- Movements that cause the robot to fall off the table surface will be prevented, however all other valid commands are allowed  
<br/>

The simulator responds to the following commands:  
<br/>
PLACE X,Y,F  
MOVE  
LEFT  
RIGHT  
REPORT  
<br/>

- PLACE will put the robot on the table at the coordinates X, Y facing NORTH, SOUTH, EAST, or WEST
- The origin (0,0) can be considered Southwest most corner
- The first command must be a PLACE command. Any sequence of commands may be used thereafter, including the PLACE command 
- The application discards all commands until a valid PLACE command is executed
- The MOVE command causes the robot to move one unit forward in the direction it is currently facing
- LEFT and RIGHT commands rotate the robot 90 degrees in the specified direction but do not change the position of the robot on the table surface
- REPORT causes a report to be printed out that displays the current coordinates and direction of the robot
- Any command that causes the robot to fall off the table will be ignored

# Example Inputs and Outputs
Input:  
PLACE 0,0,NORTH  
MOVE  
REPORT  
<br/>
Output:  
Your coordinates are: 0, 1  
and you are facing: NORTH  
<br/><br/>
Input:  
PLACE 0,0,NORTH  
LEFT  
REPORT  
<br/>
Output:  
Your coordinates are: 0, 0  
and you are facing: WEST  
<br/><br/>
Input:  
PLACE 1,2,EAST
MOVE  
MOVE  
LEFT  
MOVE  
REPORT  
<br/>
Output:  
Your coordinates are: 3, 3  
and you are facing: NORTH  

# Testing
Test the simulator by running the command `npm run test`  
<br/>
Tests are included for various commands and robot functions.
