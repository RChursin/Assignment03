/** Coin Flip Streak Game */
let coinFlip;
do {
    coinFlip = Math.floor(Math.random() * 2);  
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
} while (coinFlip !== 1);