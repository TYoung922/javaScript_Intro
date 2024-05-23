// const name = "tyler";
// const age = 35;

// console.log("My name is " + name + " and I am " + age);

// console.log(`My name is ${name} and I am ${age}`);
// const fruits = ["apples", "oranges", "pears"];

// console.log(fruits);
// console.log(fruits[1]);
// fruits[3] = "grapes";

// console.log(fruits);
// const fruits = ["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangos");

// console.log(fruits);
// const fruits = ["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangos");
// fruits.unshift("strawberries");

// console.log(fruits);

// const person = {
//     firstName: "Tyler",
//     lastName: "Young",
//     age: 35,
//     hobbies: ["music", "movies", "video games"],
//     address: {
//       street: "50 main st",
//       city: "Houston",
//       state: "TX",
//     },
//   };

//   const {
//     firstName,
//     lastName,
//     address: { city },
//   } = person;
//   console.log(city);
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Tyler", "Young", "9-22-1989");
const person2 = new Person("Tyny", "Anng", "7-02-1976 12:30:15");
console.log(person2.getFullName());
console.log(person1);
