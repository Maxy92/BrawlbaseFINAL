const express = require("express");
const mongoose = require("mongoose");
const Character = require("../../models/Character.js");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    let characters = await Character.find();
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    let characters = await Character.findById(req.params.id);
    console.log(characters);
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const small = new Character({
    name: req.body.name,
    short_description: req.body.short_description,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    weapon_1: req.body.weapon_1,
    weapon_2: req.body.weapon_2
  }
  );
  await small.save().then((e) => {
    Character.find().then((res) => console.log(res));
  });
});
router.delete("/:id", async (req, res) => {
  await Character.deleteOne({ _id: req.params.id });
  return res.status(200);
});
module.exports = router;
