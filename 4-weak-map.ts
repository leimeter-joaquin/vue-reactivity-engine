const product = {
  qty: 2,
  price: 20,
};

let total = 0;

const effect = () => {
  total = 2 * 20;
};

console.log(total, effect);

const targetMap = new WeakMap<Object, Map<string, Set<Function>>>();

function track(target: Object, key: string) {
  // get the depsMap of the target
  let depsMap = targetMap.get(target);

  // no depsMap, create and add to the targetMap
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }

  // get the dep of the property
  let dep = depsMap.get(key);

  // if no dep, create and save in the depsMap
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }

  // save the effect in the property's dep Set
  dep.add(effect);
}

function trigger(target: Object, key: string) {
  // get the depsMap
  let depsMap = targetMap.get(target);

  //clause
  if (!depsMap) return;

  // ge the dep and run the effects
  let dep = depsMap.get(key);

  if (dep) {
    dep.forEach((effect) => effect());
  }
}

export default effect; // make this file a es6 module
