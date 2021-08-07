var express = require('express');
var router = express.Router();
const navigationRouter = require("./router");
const apiV1Post = require("./api/v1/post")
const apiV1Get = require("./api/v1/get")

router.use(navigationRouter);
router.use(apiV1Post);
router.use(apiV1Get);


module.exports = router;
