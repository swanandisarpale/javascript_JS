function deepClone(obj) {
  return structuredClone(obj);
}

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);