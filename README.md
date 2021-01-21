This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Write an algorithm to output the state of the cells after the given number of days.  where input is array of integers, and n number of days

## Example 1 : 
Input Data: houses = [1, 0, 0, 0, 0, 1, 0, 0], days = 1
Output Results:  0, 1, 0, 0, 1, 0, 1, 0
Status Results: Active houses = 3, Inactive houses = 5

## Example 2 : 
Input Data: houses = [1, 0, 1, 1], days = 2
Output Results: Active houses = 3, Inactive houses = 1

After 1 day,  houses = 0, 0, 1, 1
After 2 days, houses = 0, 1, 1, 1

After 1 Day Status Results: Active houses = 2, Inactive houses = 2
Status Results: Active houses = 3, Inactive houses = 0


## Example 3 : 
Input Data: states = [1, 1, 1, 0, 1, 1, 1, 1], days = 2
Output Results: 0, 0, 0, 0, 0, 1, 1, 0

## Example 4 : 
Input Data : houses = [0, 1, 0, 1, 0, 1, 0, 1],  days = 3
Output Results: Active houses = 2 , Inactive houses = 6

## Short Explanation : 
After 1 day, houses = 1, 0, 0, 0, 0, 0, 0, 0
After 2 days, houses = 0, 1, 0, 0, 0, 0, 0, 0
After 3 days, houses =  1, 0, 1, 0, 0, 0, 0, 0

Input : houses = [0, 1, 1, 1, 0, 1, 1, 0]  days = 4
Output Results: Active houses = 3 , Inactive houses = 5
