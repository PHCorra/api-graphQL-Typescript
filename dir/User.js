"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moongose = require("mongoose");
const UserSchema = new moongose.Schema({
    name: String,
    email: String,
});
module.exports = moongose.model("User", UserSchema);
