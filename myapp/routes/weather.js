//require is a built in function that allows us to include modules that exist in separate modules. It reads a JS file, executes it and returns the exports obj
const router = require("express").Router();
//file system to read, create, update, delete, rename files
var fs = require("fs");
const jsonWeatherData = require("../data/weatherData.json");

//roiting is how application responds to requests. It uses METHOD with a path and a handler(request and response)
router.get("/", function (req, res) {
  fs.readFile("./views/weather.html", (err, jsonWeatherData) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": jsonWeatherData.length,
    });
    res.write(jsonWeatherData);
    res.end();
  });
});
router.get("/weather", function (req, res) {
  //load the jsonWeatherData from the static json object
  res.json(jsonWeatherData);
});
router.post("/weather", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  setectTown = [];
  let town = req.body;
  setectTown.push(town);
  res.redirect("/");
});

module.exports = router;
