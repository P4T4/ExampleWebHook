var express = require("express");
var router = express.Router();

/* POST webhook listing. */
router.post("/", function (req, res, next) {
  const { data } = req;
  console.log(data);
  res.send("respond with a resource");
});

module.exports = router;
