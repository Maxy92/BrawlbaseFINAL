const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    
  weapon_1: {type: String},
  weapon_2: {type: String},
    short_description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
  });
const Character = mongoose.model('Character', schema);
module.exports = Character;