const product = {
  qty: 2,
  price: 20,
};

let total = 0;

const effect = () => {
  total = 2 * 20;
};

// const square = {
//   length: 20,
//   weight: 100,
// };

// let density = 0;

// const calculateDensity = () => {
//   density = weight / (length * length * length);
// };

const targetMap = new WeakMap();

const track = (target, key) => {
  // Get the depsMap for this target (target is an object)
  let depsMap = targetMap.get(target);

  // If not, create a depsMap and add it
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // Get the dep for this depsMap (depsMap is a map of (key: value) => ('propertyName': 'setOfEffects') )
  let dep = depsMap.get(key);

  // if there are no effects, create the Set
  if (!dep) {
    dep = new Set();
    depsMap.set(dep);
  }

  // Add the effect to the dep set.
  dep.add(effect);
};

const trigger = (target, key) => {
  // get the depsMap for this target
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    return;
  }

  // Get the dep, a Set of effects.
  let dep = depsMap.get(key);

  // if there are deps, run them.
  if (dep) {
    dep.forEach((effect) => effect());
  }
};
