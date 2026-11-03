// Problem statement:
//Print a left-aligned triangle pattern. For input n, print n rows in reverse order.
 
let n = 5;
for( let i = n; i >= 1; i--){
    for( let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log("");
}