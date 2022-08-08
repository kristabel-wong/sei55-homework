# Read Me
## MTA Lab -- Version 2
### 1. How to get the results
Please check the results from the console  
To open the console: `Cmd + Opt + I`

### 2. Features
1. Inputs can be 3 or 4 arguments  
2. Outputs have vary font color depending on the situations:   
    - signle line trip: green output
    - 2 lines trip: blue output
    - typo fault: pink output
    - match fault: yellow output

### 3. Version 2 Updates
This is a totally rewrite code.   

---
1. Update data structer    
`subwayLines` is an object: `key` is the line name, `value` is the stops (Array)
```
const subwayLines = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
} // subwayLines
```

---
2. Update `toolkits` structer   
`toolkits` is an object, which contains 3 functions.    
    - `singleLinePlaner()`  
This function can take 3 or 4 arguments.   
And `return` the stops (Array) in the trip.  
        - 3 arguments:   
        Line name: `args[0]`   
        Starting Station: `args[1]`   
        Ending Station: `args[2]`    
        - 4 arguments:   
        The code will ignore the thrid argument (second line = first line)    
        Line name: `args[0]`   
        Starting Station: `args[1]`   
        Ending Station: `args[3]`       
   
   *The stops counter can be obtained by `stops.length - 1`*    


    - `typoChecker()`   
    This function can take 3 or 4 arguments.    
    And `return` `true` or `false` and the error `messages` (Array)    
    The check order:   
        1. Check typo in **start line name**  
        2. Check typo in **start station name**   
        3. Check typo in **end line name**  
        4. Check typo in **end station name**

    - `isMatch()`   
    This function can take 3 or 4 arguments.    
    And `return` `true` or `false` and the error `messages` (Array)   
    The check order:   
        1. Check if **start station** in the **start line**
        2. Check if **end station** in the **end line**  


---
3. Update `planTrip()` main function structer   
    1. typo check by call    
     `toolkits.typoChecker()`   
    2. match check by call    
    `toolkits.isMatch()`   
    3. trip(s) planer   
        - 1 line trip:   
        `toolkits.singleLinePlaner()`   
        - 2 lines trip:   
        call `toolkits.singleLinePlaner()`    
        from the start station to the intersection station then call  `toolkits.singleLinePlaner()` agian from intersection station to the end station.   

---
### 4. Tests
1. Valid inputs   
```
planTrip('N', 'Times Square', '6', '33rd'); 
// two trips

planTrip('6', 'Astor Place', '6', '33rd'); 
// one trip: 4 inputs

planTrip('N', 'Times Square', '23rd'); 
// one trip: 3 inputs
```
Outputs:    
```
You must travel through the following stops on the N line: Times Square, 34th, 28th, 23rd, Union Square.Change at Union Square.Your journey continues through the following stops on the 6 line: Union Square, 23rd, 28th, 33rd.7 stops in total.
```

```
You must travel through the following stops on the 6 line: Astor Place, Union Square, 23rd, 28th, 33rd.4 stops in total.
```

```
You must travel through the following stops on the N line: Times Square, 34th, 28th, 23rd.3 stops in total.
```
---
  
2. Invalid inputs
```
planTrip('6', 'Astor Place', '7', '33rd'); 
// typo: there is no line '7'

planTrip('5', 'Astor Places', '7', '33rda'); 
// typo: 4 typos

planTrip('N', 'Astor Place', '6', '33rd'); 
// match: there is no 'Astor Place' station in line 'N'
```
Outputs:  
```
Please check the input: ending line
```

```
Please check the input: starting line, starting station, ending line, ending station
```

```
The starting line and station doesn't match
```


