// problem statement: Print a right triangle pattern using stars. 
// For input n, print n rows where row i has i stars.

let n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log(" ");
}

