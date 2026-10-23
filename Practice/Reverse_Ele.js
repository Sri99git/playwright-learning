// Problem statement:
// Reverse Array Elements
// 1 2 3 4 5

let num = [1, 2, 3, 4, 5];
let result = "";

for (let i = num.length - 1; i >= 0; i--) {
    result += num[i] + " ";
}

console.log(result.trim());

/*let num = [1, 2, 3, 4, 5];
for (let i = num.length - 1; i >= 0; i--) {
console.log(num[i]);
}*/