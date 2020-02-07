const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("app is running at", port);
});
