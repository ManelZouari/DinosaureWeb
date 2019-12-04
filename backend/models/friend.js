const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const friendSchema = mongoose.Schema({
  login: { type: String, required: true },
  friend: { type:String , required: true },
  

});

friendSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Friend', friendSchema);