var express = require('express');
var router = express.Router();

const controllers = require("../controllers");

router.get("/", controllers.home.show);
router.get("/about", controllers.about.show);


module.exports = router;