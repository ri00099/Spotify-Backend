const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    uniquie: true,
    type: String,
  },
  email: {
    required: true,
    uniquie: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "artist"],
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
