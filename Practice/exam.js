// Triangle classifier
/* All three sides equal → Equilateral
Any two sides equal → Isosceles
All sides different → Scalene*/
let a = 3;
let b = 4;
let c = 5;
if ( a === b && b === c){
    console.log("Equilateral");
}
else if ( a === b || b === c || a === c){
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}