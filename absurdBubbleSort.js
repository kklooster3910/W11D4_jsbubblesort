readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
    
};

function sortCompletionCallback() {

}

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, function (userInput) {
        const answer = userInput;

        if (answer == "yes") {
            callback(true);
        } else if (answer == "no") {
            callback(false);
        } else {
            throw Error("Must type 'yes' or 'no'");
        } 
        reader.close();
    });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan);
    }
};

function outerBubbleSortLoop() {
    
}

function isGreaterThan(boolean) {
    console.log(boolean);
};

askIfGreaterThan(1, 2, isGreaterThan);