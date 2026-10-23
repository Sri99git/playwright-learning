// problem statement:
// Write a program that takes three sides of a triangle and classifies it as Equilateral,
//  Isosceles, or Scalene.
let a = 15;
let b = 15;
let c = 15;
if (a === b && b === c) {
    console.log("Equilateral");
}
else if (a === b || a === c || b === c) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}


