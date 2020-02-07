const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log("app is running at", port);
});

app.get("/", (req, res) => {
  res.status(200).json({ MSg: "hello", AppType: "Server " });
});

app.post("/post", (req, res) => {
  res.status(200).json({ sss: "you can " });
});
