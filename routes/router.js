var express = require('express');
var router = express.Router();

const controllers = require("../controllers");

router.get("/", controllers.home.show);
router.get("/about", controllers.about.show);

// Register Page
router.get('/register', (req, res) => res.render('register'))
router.post('/register', controllers.auth.register)


router.get('/login', (req, res) => res.render('login'))


router.post('/login', controllers.auth.login)

module.exports = router;