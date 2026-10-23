// problem statement:
// Find and print all duplicate elements in an array.
// 6, 1, 2, 3, 2, 4, 1
let num = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < num.length; i++) {
    let alreadyprinted = false;

    // Check whether this element appeared earlier
    for (let k = 0; k < i; k++) {
        if (num[i] === num[k]) {
            alreadyprinted = true;
            break;
        }
    }

    // Only check for a duplicate if not seen earlier
    if (alreadyprinted === false) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] === num[j]) {
                console.log(num[i]);
                break;
            }
        }
    }
}