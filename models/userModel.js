const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const e = require("express");

const AdminSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" }
});

module.exports = mongoose.model("Admin", AdminSchema);