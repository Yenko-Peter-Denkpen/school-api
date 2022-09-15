const school = require("../models/schoolSchema")

const createSchool = (req, res) => {
const newSchool = new school({
    schoolname: req.body.schoolname,
    location: req.body.location,
    category: req.body.category,
    facilities: req.body.facilities,
    numOfStudents: req.body.numOfStudents,
    address: req.body.address,
    contact:req.body.contact 
})
newStudent.save();
res.status(200).json(newSchool)
}
module.exports={createSchool}