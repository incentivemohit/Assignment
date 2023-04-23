const express = require("express");
const app = express();
require("./db/config");

const userDetailsRoutes = require("./routes/userDetailsRoutes");

app.use(express.json());

app.use("/api/v1", userDetailsRoutes);

app.listen(9000, (err) => {
  if (!err) console.log("Server is running");
});
