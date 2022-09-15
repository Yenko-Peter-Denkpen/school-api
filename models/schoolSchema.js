const mongoose =require("mongoose")

const schoolschema =mongoose.schema({
schoolname: {
    type: String,
    require: true,
    unique:true
},
location: {
    type: string,
    require:true
},
category: {
    type:string,
    required:true
},
facilities: {
    type: Array,
    maxlength:3
},
numOfStudents: {
    type: number,
    require:true
},
Address: {
    gps: string,
    box: string
},
contact : {
    phone: string,
    email:string
}
}, {
    timestamps:true
}
)


const school = mongoose.model("school", schoolSchema)
module.exports=School