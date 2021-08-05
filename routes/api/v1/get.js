var express = require('express');
var router = express.Router();

const controllers = require("../controllers");

router.get("/api/v1/users", controllers.home.show);
router.get("/api/v1/about", controllers.about.show);

module.exports = router;