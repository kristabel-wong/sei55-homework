console.log(`%cLet me tell thee of the days of high adventure...`, 'font-family: fantasy; font-size: 14px;');

console.log(`Part 1, Rectangle`);

// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

//     isSquare - Returns whether the rectangle is a square or not
//     area - Returns the area of the rectangle
//     perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function(shape){
    if(shape.length === shape.width){
        return true;
    }else {
        return false;
    }
} // isSquare()

const area = function(shape){
    return shape.length * shape.width;
} // area()

const perimeter = function(shape){
 return 2 * shape.length + 2 * shape.width;
} // perimeter()

// console.log(`isSquare is: ${isSquare(rectangleA)}`);
// console.log(`area is: ${area(rectangleA)}`);
// console.log(`perimeter is: ${perimeter(rectangleA)}`);

console.log(`Part 2, Triangle`);

// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

//     area - Returns the area of the Triangle
//     isEquilateral - Returns whether the triangle is equilateral or not
//     isIsosceles - Returns whether the triangle is isosceles or not
//     isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 1,
  sideB: 5,
  sideC: 4
};

const isEquilateral = function(triangle){
    if(triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC){
        return true;
    } else {
        return false;
    }
} //isEquilateral()

const isIsosceles = function(triangle){
    if(triangle.sideA === triangle.sideB){
        return true;
    } else if(triangle.sideB === triangle.sideC) {
        return true;
    } else if (triangle.sideC === triangle.sideA){
        return true;
    } else {
        return false;
    }
} //isIsosceles()

const areaOfTriangle = function(tri) {
// herons formula
    let s = (tri.sideA + tri.sideB + tri.sideC)/2;
    let area = Math.sqrt(s*((s-tri.sideA)*(s-tri.sideB)*(s-tri.sideC)));
    return area;
} //areaOfTriangle()

// if the sum of the squares of the two shorter sides of a triangle is smaller than the square of the longest side, the triangle is obtuse

const isObtuse = function(tri){
    if(isEquilateral(tri)){
        return false;
    }
    let longestSideSquared;
    let shorterSidesSquared;
    // find the two shorter sides by finding the longest side
    if(tri.sideA > tri.sideB){
        longestSideSquared = tri.sideA**2;
        shorterSidesSquared = tri.sideB**2 + tri.sideC**2;
    } else if(tri.sideB > tri.sideC){
        longestSideSquared = tri.sideB**2;
        shorterSidesSquared = tri.sideA**2 + tri.sideC**2;
    } else{
        longestSideSquared = tri.sideC**2;
        shorterSidesSquared = tri.sideA**2 + tri.sideB**2
    }

    if(shorterSidesSquared < longestSideSquared){
        return true;
    }else{
        return false;
    }
}; //isObtuse()


console.log(`is the triangle equilateral?: ${isEquilateral(triangleA)}`);
console.log(`is the triangle isosceles?: ${isIsosceles(triangleA)}`);
console.log(`what is the area of the triangle: ${areaOfTriangle(triangleA)}`);
console.log(`is the triangle obtuse?: ${isObtuse(triangleA)}`);