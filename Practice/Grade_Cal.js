// problem statement: 
// Calculate the letter grade based on a numeric score. 
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.
let score = 110;

if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
