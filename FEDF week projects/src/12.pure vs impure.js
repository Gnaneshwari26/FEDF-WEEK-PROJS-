// Impure Function
let taxRate = 0.18;

function calculatePrice(price) {
  return price + price * taxRate;
}

console.log(calculatePrice(100));

taxRate = 0.25;

console.log(calculatePrice(100));

// Array Mutation (Impure)
let arr = [1, 2, 3];

function addItem(item) {
  arr.push(item);
}

addItem(4);
console.log(arr);

// Pure Function
function calculatePricePure(price, tax) {
  return price + price * tax;
}

console.log(calculatePricePure(100, 0.18));

// Pure Array Function
function addItemPure(array, item) {
  return [...array, item];
}

console.log(addItemPure([1, 2, 3], 4));