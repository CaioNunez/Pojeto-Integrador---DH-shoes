const express = require ("express");
const authUserRote = require("../controllers/AuthenticationUserController");
const router = express.Router();
const autheUserController = require ("../controllers/AuthenticationUserController");

router.get("/", autheUserController.login)
router.get("/create", autheUserController.create)
router.post("/create", autheUserController.store)
router.post ("/",autheUserController.authentication)

module.exports = router;
