// const express = require("express");

// const app = express();

// app.use(express.json());

// var users = [
//   {
//     name: "john",
//     kidney: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// app.get("/", (req, res) => {
//   let numberOfKidneys = users[0].kidney.length;
//   let numberOfHealthyKidney = users[0].kidney.filter((kidney) => {
//     if (kidney.healthy) {
//       return kidney;
//     }
//   }).length;

//   let numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;

//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidney,
//     numberOfUnhealthyKidney,
//   });
// });

// app.post("/", (req, res) => {
//   let newKidney = req.body.isHealthy;

//   users[0].kidney.push({
//     healthy: newKidney,
//   });

//   res.send("Received");
// });

// app.put("/", (req, res) => {
//   let updateKidney = req.body.updatedKidney;

//   users[0].kidney.forEach((element) => {
//     element.healthy = updateKidney;
//   });

//   res.send("Updated");
// });

// app.delete("/", (req, res) => {
//   // let deleteUnHealthyKideny = req.body.deleteUnHealthyKideny;

//   let isUnhealthy = users[0].kidney.findIndex((_item) => _item === false);
//   console.log(isUnhealthy);

//   let deleted = users[0].kidney.filter((_item) => {
//     return _item.healthy !== false;
//   });

//   users[0].kidney = deleted;
//   console.log(deleted);

//   res.send("Deleted");
// });

// // const calculateSumOfNumbers = (n) => {
// //   let ans = 0;

// //   for (let i = 0; i <= n; i++) {
// //     ans = ans + i;
// //   }
// //   return ans;
// // };

// // app.get("/", (req, res) => {
// //   let n = req.query.n;
// //   let sum = calculateSumOfNumbers(n);
// //   res.send(sum.toString());
// // });

// app.listen(3001, () => {
//   console.log("This is New Port" + 3001);
// });

// week 2.6

let array = [1, 2, 3, 4, 5, 6, 7];

// let newArray = array.filter((_item) => {
//   return _item % 2 == 0;
// });

// // let newForArray = [];

// for (let i = 0; i < array.length; i++) {
//   let newArray = [];
//   if (!array[i] % 2 == 0) {
//     newArray = array.slice(i, i);
//   }
//   console.log("newArray", newArray);
//   return newArray;
// }

// let myPromise = new Promise((resolve, reject) => {
//   resolve("DONE");
// });

// myPromise.then((res) => res).catch((err) => err);

// console.log("Mypromise", myPromise);
