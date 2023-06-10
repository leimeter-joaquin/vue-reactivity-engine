let price = 5;
let quantity = 2;
let total = price * quantity;

console.log(`Total: ${total}`);

price = 7;
console.log(`changed price to 7`);

console.log(`Total: ${total}`);
console.log("total is still 10 because it is not reactive");
