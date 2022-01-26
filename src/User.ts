import moongose = require("mongoose");

const UserSchema = new moongose.Schema({
  name: String,
  email: String,
});

module.exports = moongose.model("User", UserSchema);

export {};
