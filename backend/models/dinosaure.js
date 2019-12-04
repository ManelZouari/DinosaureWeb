const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const dinosaureSchema = mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  famille: { type: String, required: true },
  race: { type: String, required: true },
  nourriture: { type: String, required: true },

});

dinosaureSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Dinosaure', dinosaureSchema);