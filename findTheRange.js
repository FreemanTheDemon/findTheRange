// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let array2 = [2, 124, -612, 20, 54, 2, -36]

// Write your solution below:

function findTheRange(arr) {
    let low = arr[0];
    let high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        if (low > currentNumber) {
            low = currentNumber;
        }
        if (high < currentNumber) {
            high = currentNumber;
        }
    }
    console.log(low, high);
}

findTheRange(array);
findTheRange(array2);