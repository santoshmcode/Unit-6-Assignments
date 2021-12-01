const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(process.env.PORT || 5599, () => {
    console.log(`http://localhost:${process.env.PORT || 5599}`);
});
