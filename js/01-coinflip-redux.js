/** Coin Flip Game Redux */
let numberOfFlips = prompt("Enter the number of times to flip the coin:");
for (let i = 0; i < numberOfFlips; i++) {
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
