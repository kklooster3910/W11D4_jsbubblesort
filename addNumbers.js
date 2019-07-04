const readline = require("readline");

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Enter a number fool: ", function (userNumber) {
            const currentNum = parseInt(userNumber);

            sum += currentNum;
            console.log("Your current 4th of July sum: " + sum);

            addNumbers(sum, (numsLeft - 1), completionCallback);
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
    }
};

function completionCallback (sum) {
    console.log("Your total sum is: " + sum);
    reader.close(); // do we need this here or in the addNumbers function?
};

addNumbers(12, 5, completionCallback);
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));