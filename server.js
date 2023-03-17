const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

const port = 5000;

app.get("/", (req, res) => {
  console.log("from root route!!!");
  res.send("This is from / route!!!");
});

app.get("/home", (req, res) => {
  console.log("from home route!!!");
  res.json({
    message: "haa bhai kya haal hai:)",
  });
});

app.post("/custom", (req, res) => {
  console.log("from custom route ", req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
