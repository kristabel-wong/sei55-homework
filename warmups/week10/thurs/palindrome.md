# Palindrome
Write a function in JavaScript where given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not. Please install the below!

## Test Suite
Follow the instructions below to test out your solution!
```
git clone https://github.com/textchimp/palindrome-warmup-tdd.git
cd palindrome-warmup-tdd
npm i            # install the Jest test runner
npm test         # for single-run test
npm run watch    # to run in watch mode
```

Example 1:
```
Input: x = 121
Output: true

Explanation: 121 reads as 121 from left to right and from right to left.
```
Example 2:
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
Example 3:
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```


