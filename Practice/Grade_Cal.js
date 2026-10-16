// problem statement: 
// Calculate the letter grade based on a numeric score. 
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.
let score = 62;
if(score>= 90 && score <= 100){
    console.log("Grade: A");
} else if(score>= 80 && score <= 89){
    console.log("Grade: B");
} else if(score>= 70 && score <= 79){
    console.log("Grade: C");
} else if(score>= 60 && score <= 69){
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
