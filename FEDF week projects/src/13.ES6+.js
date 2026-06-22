// Arrow Function
const square = n => n * n;

// Default Parameter
const greet = (name = "Guest") => `Hello ${name}`;

// Destructuring
const student = {
  name: "Srujana",
  age: 20
};

const { name, age } = student;

// Template Literal
console.log(`Name: ${name}, Age: ${age}`);

// Optional Chaining
const user = {
  address: {
    city: "Hyderabad"
  }
};

console.log(user?.address?.city);

// Nullish Coalescing
let nickname = null;
console.log(nickname ?? "No Nickname");

// Spread Operator
const newStudent = {
  ...student,
  course: "B.Tech"
};

console.log(newStudent);

// Async/Await
async function fetchData() {
  return "Data Received";
}

async function showData() {
  const result = await fetchData();
  console.log(result);
}

showData();

// Function Calls
console.log(square(5));
console.log(greet());
console.log(greet("Srujana"));