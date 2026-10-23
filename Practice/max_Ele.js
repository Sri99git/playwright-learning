// problem statement:
// Find and print the maximum element in an array of integers.
let num = [4, 10, 5, 8, 3];
let max = num[0];
for (let i = 1; i < num.length; i++){
    if(num[i] > max){
        max = num[i];
    }
    }
    console.log(max);


