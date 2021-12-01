const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const app = express();
const AdminController = require("./controllers/admin.controller");

app.use(express.json());
app.use("/admin", AdminController);

app.listen(process.env.PORT || 5599, async () => {
    try {
        await connect();
        console.log(`http://localhost:${process.env.PORT || 5599}`);
    } catch (error) {
        console.log(error.message);
    }
});
