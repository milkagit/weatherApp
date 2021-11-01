const express = require("express");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Import Route
const weatherRoute = require("./routes/weather");
// Middleware route
app.use("/", weatherRoute);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
