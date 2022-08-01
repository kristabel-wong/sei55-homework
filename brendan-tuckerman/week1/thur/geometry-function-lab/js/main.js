// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:

// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

//test array
const rectangle = {
    length: 4,
    width: 5,
};

const isSquare = (rect) => {
    return rect.length === rect.width;
}


//Testing
console.log(`Testing is square 4, 5: ${isSquare(rectangle)}`);
rectangle.width = 4;
console.log(`Testing is square 4, 4: ${isSquare(rectangle)}`);


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:

// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
      sideA: 4,
      sideB: 4,
      sideC: 4,
    };

const isEquilateral = (tri) => {
    return new Set(Object.values(tri)).size === 1;  //a Set can only take one of any type of data
}; //end isEquilateral

const isIsoceles = (tri) => {
    return new Set(Object.values(tri)).size === 2;  //a Set can only take one of any type of data, so expect 2
}; //end isIsoceles


const areaOfTri = (tri) => { //determines the area of either an Equalateral, Isoceles or RA triangle (Damn you scalene!)
    const sideA = tri.sideA;
    const sideB = tri.sideB;
    const sideC = tri.sideC;
    if (isEquilateral(tri) || isIsoceles(tri)){
        
        const perimeter = (sideA + sideB + sideC) /2;
        return Math.sqrt( perimeter * (perimeter- sideA) * (perimeter - sideB) * (perimeter -sideC));

    } else {
        const triValues = Object.values(tri).sort(); //turns into an array and sorts. Should be a function as I used it more thanonce
        return ( triValues[0] * triValues[1] ) / 2;
    }

    
}; // end area OfTri

// if the sum of the squares of the two shorter sides of a triangle is smaller than the square of the longest side, === obtuse
const isObtuse = (tri) => {
    const triValues = Object.values(tri).sort(); //turn sides into array and sort smallest --> largest
    console.log(triValues);
     return ( Math.pow(triValues[0], 2)) + Math.pow(triValues[1],2) <  Math.pow(triValues[2], 2);
};


//Testing
console.log(`Testing isEquilateral (4,4,4): ${isEquilateral(triangle)}`);
console.log(`Testing isIsoceles (4,4,4): ${isIsoceles(triangle)}`);

console.log(`Testing isObtuse (4,4,4): ${isObtuse(triangle)}`);
console.log(`Testing area of triangleL: ${areaOfTri(triangle)}`);


