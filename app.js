const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// app.get("", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.post("/api", (req, res) => {
  res.send(req.body);

})

app.listen(3000, (res) => console.log("server started..."));