const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: "Emma Stone",
    ocupation: "actor",
    catchPhrase: "La la la?",
  },
  {
    name: "Tom Hanks",
    ocupation: "actor",
    catchPhrase: "Life is like a box of chocolate",
  },
  {
    name: "Pamela Anderson",
    ocupation: "Boobs Model",
    catchPhrase: "Blondes are smarter",
  },
];

// mongoose
//   .connect("mongodb://localhost/starter-code", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     Celebrity.insertMany(celebrities).then(() => {
//       console.log("Celebrities DB created!");
//     });
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
