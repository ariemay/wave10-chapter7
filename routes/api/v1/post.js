const router = require("express").Router()

const controllers = require("../../../controllers");

router.post("/api/v1/auth/login", controllers.auth.login);

module.exports = router;