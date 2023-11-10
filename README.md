# Verstrade-node-assignment

# Question
Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.

# Algorithm Description

## findFibonacci Function
 This function calculates the Fibonacci sequence recursively.
 The base case checks if n is 0 or 1. If true, it returns n.
 If n is greater than 1, it calculates the Fibonacci value by adding the results of two recursive calls with n - 1 and n - 2.
## position_number Constant
 This constant is set to the value 10, indicating the position in the Fibonacci sequence that we want to find.
## Function Invocation
 The findFibonacci function is called with the value of position_number (which is 10 in this case), and the result is stored in the variable response.
## Console Output
The code then prints the result to the console, showing the Fibonacci position number and the corresponding value.
5. Memoization
The memoization parameter is added to the findFibonacci function to store previously computed results.
Before making a recursive call, the function checks if the result for the current value of n is already memoized. If it is, the memoized result is returned directly.
If the result is not memoized, the function calculates it recursively, memoizes the result, and then returns the result.

# How to run
## Step 1 : Make s ure you have a JavaScript runtime (Node.js v20.9.0) installed on your system. 
## Step 2 : If you have Node.js installed, open a terminal or command prompt, navigate to the directory where the file is saved.
## Step 3 : And run the following command: node app.js
