const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String, // bcrypt-hashed
});

module.exports = mongoose.model("User", userSchema);
