// Problem statement:
// Find and print the smallest element in an array of integers.
// 4 12 34 10 1
let num = [4, 12, 34, 10, 1];
let min = num[0];
for (let i = 1; i < num.length; i++){
    if(num [i] < min){
        min = num[i];
    
    }
}
console.log(min);