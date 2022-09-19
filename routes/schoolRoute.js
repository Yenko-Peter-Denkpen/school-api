const { createSchool, getSchools } = require("../controllers/schoolConrtollers")
const { Router } = require("express")

const router = Router();

router.post("/addschool", createSchool)

router.route("/schools").get(getSchools)

module.exports= router