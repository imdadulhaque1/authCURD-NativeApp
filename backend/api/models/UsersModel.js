const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
