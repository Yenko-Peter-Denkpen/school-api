const User = require("../models/userSchema")
const bcryptjs = ("bcryptjs")

// adding a user

const addUser = async (req, res) => {
    // enccryping a password
    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(req.body.password,salt)

    const newUser = User({
        username:req.body.Username,
        email: req.body.email,
        password:req.body.password
    });

    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        username:newUser.username,
        email:newUser.email
    })
}
module.exports={addUser}