// map()
let nums = [1, 2, 3, 4];
let doubled = nums.map(num => num * 2);
console.log(doubled);

// filter()
let evenNums = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evenNums);

// reduce()
let sum = [10, 20, 30].reduce((acc, curr) => acc + curr, 0);
console.log(sum);