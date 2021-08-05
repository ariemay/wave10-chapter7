var express = require('express');
var router = express.Router();
const navigationRouter = require("./router");

router.use(navigationRouter);

module.exports = router;
