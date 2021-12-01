const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());

app.listen(process.env.PORT || 5599, async () => {
    try {
        await connect();
        console.log(`http://localhost:${process.env.PORT || 5599}`);
    } catch (error) {
        console.log(error.message);
    }
});
