const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

router.get("/celebrities", (req, res, next) => {
  console.log("We are in celebrities page");
  Celebrity.find().then((celebs) => {
    console.log(celebs);
    res.render("celebrities/index", { celebrities: celebs });
  });
});

router.get("/celebrities/new", (req, res, next) => {
  console.log("We are in celebrities/new page");
  res.render("celebrities/new", {});
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  newCeleb = new Celebrity({
    name: name,
    ocupation: ocupation,
    catchPhrase: catchPhrase,
  });
  newCeleb.save().then(() => {
    res.redirect("/celebrities/");
  });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  console.log("We are in celebrities page");
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/celebrities/");
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  console.log("We are in celebrities page");
  Celebrity.findById(req.params.id)
    .then((celebs) => {
      console.log(celebs);
    })
    .then(() => {
      res.render("celebrities/show", { celebrity: celebs });
    });
});

module.exports = router;
