var express = require('express');
var router = express.Router();

const controllers = require("../../../controllers");
const restrict = require("../../middlewares/restrict");

router.get("/api/v1/users", restrict, controllers.home.show);
router.get("/api/v1/about", restrict, controllers.about.show);

router.get("/api/v1/auth/whoami", restrict, controllers.auth.whoami)


module.exports = router;