const express = require("express");
const path = require("path");
const router = express.Router();

const app = express();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use("/", router);
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});
