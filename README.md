# Verstrade-node-assignment

# Question1
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

# Question2
A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - N is an integer within the range [1..100,000];
 - string S is made only of lowercase letters (a−z).

# Algorithm Description

## chkBalancedstring Function:
The chkBalancedstring function checks whether a given string is balanced according to the rules defined in the problem. It uses an object charsObjCounts to count the occurrences of each character in the string.
If there are exactly two different characters and they appear the same number of times, the function returns true, indicating that the string is balanced.
## getBalancedSubstrings Function:
The main function, getBalancedSubstrings, takes a string S as input.
It initializes an empty array output to store the balanced substrings.
It defines the nested chkBalancedstring function for checking balance within substrings.
## Nested Loop:
The function uses two nested loops to iterate through all possible substrings of S.
The outer loop (i) represents the starting index of the substring, and the inner loop (j) represents the ending index.
It considers all substrings of length 2 or more.
## Substring Extraction:
   For each pair of indices (i, j), it extracts the substring using S.substring(i, j).
## Balance Check:
   It then calls the chkBalancedstring function to check if the substring is balanced.
   If balanced, the substring is added to the output array.
## Finding Longest Substrings:
   After processing all substrings, it determines the maximum length of the balanced substrings in the output array.
## Result Filtering:
   Finally, it filters the substrings in the output array to include only those with the maximum length.
## Return:
   The function returns the array containing the longest balanced substrings.

# How to run
## Step 1 : Make s ure you have a JavaScript runtime (Node.js v20.9.0) installed on your system. 
## Step 2 : If you have Node.js installed, open a terminal or command prompt, navigate to the directory where the file is saved.
## Step 3 : And run the following command: node app.js
## Step 3 : To run the second algorithm the following command: node app2.js
