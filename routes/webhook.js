var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const { data } = req;
  console.log(data);
  console.log(res);
  res.send("respond with a resource");
});

module.exports = router;
