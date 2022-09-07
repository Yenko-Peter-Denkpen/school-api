const mongoose = require("mongoose")
const { string } = require("yup/lib/locale")

const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique:true,
        require:true,
    },

    email: {
        type: string,
        require: true,
        unique:true
    },
    password: {
        type: string,
        require:true,
    }

});

const User = mongoose.model("user, userSchema")
module. exports = User;