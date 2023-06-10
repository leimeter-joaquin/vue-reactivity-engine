let price = 5;
let quantity = 2;
let total = 0;

let dep = new Set();

const effect = function () {
  console.log("ran effect");
  total = price * quantity;
};

const track = function () {
  console.log("ran track");
  dep.add(effect);
};

const trigger = function () {
  console.log("ran trigger");
  dep.forEach((effect) => effect());
};

console.log(`Total: ${total}`);

track();
trigger();

console.log(`Total: ${total}`);
