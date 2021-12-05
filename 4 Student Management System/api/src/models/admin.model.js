const mongoose = require("mongoose");

const { Schema } = mongoose;
const adiminScheme = Schema(
    {
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        role: { type: String, default: "admin" },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Admin = mongoose.model("Admin", adiminScheme);

module.exports = Admin;
