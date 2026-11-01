// Problem statment:
// Find and print the frequency of each element in an array.
// 5 1 2 1 3 2

let num = [5, 1, 2, 1, 3, 2];

for (let i = 0; i < num.length; i++) {
    let count = 0;
    let alreadyCounted = false;

    // Check whether this element appeared earlier
    for (let k = 0; k < i; k++) {
        if (num[i] === num[k]) {
            alreadyCounted = true;
            break;
        }
    }

    // Count and print only if it is not a duplicate
    if (alreadyCounted === false) {
        for (let j = 0; j < num.length; j++) {
            if (num[i] === num[j]) {
                count++;
            }
        }

        console.log(num[i] + " appears " + count + " times");
    }
}
