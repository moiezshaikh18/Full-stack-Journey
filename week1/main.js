console.log("Hello World");

// Static and Dynamic Languages
// Static :- Its has strict type
//Dynamic :-  its is has no strict type(Superset has come that call Typescript)

// javascript has single threaded nature(runs only one core )
// There are way can multithreads

//1. write program to given name for greeting

// const greeting = (fname, lname) => {
//   greet = `Welcome ${fname} ${lname} to Cohort 2.0`;
//   return greet;
// };

// const res = greeting("Moiz", "shaikh");

// console.log(res);

// //2.

// const greetGender = (gender) => {
//   const greet = gender === "male" ? "He is Awesome" : "She is beautifull";
//   return greet;
// };

// const resGender = greetGender("female");
// console.log(resGender);

// //3

// for (let index = 0; index <= 1000; index++) {
//   console.log(index);
// }

// let Fname = "moiz";
// let age = 18;
// let isMarried = false;

// console.log("Ths is person name is " + Fname + "his age is " + age);

// let personArray = ["Moiz ", "gaurish", "Girish"];

// personArray.forEach((ele) => {
//   console.log(ele);
// });

const ages = [21, 22, 23, 24, 25, 26, 85, 75];

// for (let i = 0; i <= ages.length; i++) {
//   if (ages[i] % 2 === 0) {
//     console.log(ages[i]);
//   }
// }

// let largest = 0;

// for (let i = 0; i <= ages.length; i++) {
//   if (ages[i] > ages[i]) {
//     console.log(ages[i]);
//   }
// }

// let person = [
//   { fName: "Moiz", gender: "male" },
//   {
//     fName: "Girish",
//     gender: "female",
//   },
//   {
//     fName: "Girish",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < person.length; i++) {
//   if (person[i]["gender"] === "female") {
//     console.log(person[i]["fName"]);
//   }
// }

// let largest = 0;

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > largest) {
//     largest = ages[i];
//   }
// }
// console.log(largest);

// let reverseArray = [];

// for (let i = ages.length - 1; i >= 0; i--) {
//   console.log(i);
//   console.log(i < 0);
//   console.log(i < 0);
//   reverseArray.push(ages[i]);
// }
// console.log(reverseArray);

// function sum(a, b, clBack) {
//   let sum = a + b;
//   return clBack(sum);
// }
// function displayResult(data) {
//   return "This is sum of " + data;
// }

// function displayResultPassive(data) {
//   return "Sum of data " + data;
// }

// const a = sum(2, 3, displayResult);
// const b = sum(2, 3, displayResultPassive);

// console.log(a);
// console.log(b);

// function calculate(fnType) {
//   return fnType;
// }

// function sum(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// let add = calculate(sum(2, 5));
// let sub = calculate(minus(10, 6));

// setTimeout(greetGender("male"), 5000);
