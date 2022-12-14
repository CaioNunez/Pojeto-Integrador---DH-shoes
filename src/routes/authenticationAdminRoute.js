const express = require("express");
const router = express.Router();
const authenticationAdminController = require("../controllers/AuthenticationAdminController")


router.get("/", authenticationAdminController.login)
router.post("/", authenticationAdminController.authentication)
router.post("/logout",authenticationAdminController.logout)


module.exports=router;