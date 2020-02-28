var express = require("express");
var router = express.Router();
var validator = require("./customValidator");
//const validationResult = require('./validResult');

/* GET home page. */
router.get("/", function(req, res, next) {
    throw new Error('test');
    //res.render("index", { title: "Express" });
});

router.get("/:id/info", validator.checkId, validator.validResult, function(req, res, next) {
    res.render("index", { title: "Express" });
});
module.exports = router;
