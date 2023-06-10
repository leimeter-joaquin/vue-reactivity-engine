const depsMap = new Map();

const track = (key) => {
  console.log("ran track", key);
  let dep = depsMap.get(key); // get deps
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }

  dep.add(effect);
};

const trigger = (key) => {
  console.log("ran trigger", key);
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
};

// Execution
const product = {
  price: 5,
  quantity: 2,
};
let total = 0;

const effect = function () {
  console.log("ran effect");
  total = product.price * product.quantity;
  console.log(`Total: ${total}`);
};

track("quantity");

product.quantity = 3;
trigger("quantity");

product.quantity = 9;
trigger("quantity");
