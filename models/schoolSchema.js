const mongoose =require("mongoose")

const schoolSchema =mongoose.Schema({
schoolname: {
    type: String,
    require: true,
    unique:true
},
location: {
    type: String,
    require:true
},
category: {
    type:String,
    required:true
},
facilities: {
    type: Array,
    maxlength:3
},
numOfStudents: {
    type: Number,
    require:true
},
address: {
    gps: String,
    box: String
},
contact : {
    phone: String,
    email:String
}
}, {
    timestamps:true
}
)


const School = mongoose.model("school", schoolSchema)
module.exports=School