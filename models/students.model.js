const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentRegistrationNumber:String,
    studentId:String,
    studentName : String,
    fatherGuardianName : String,
    class:String,
    emergencyContact : Number,
    studentProfileImageUrl:String
})

const StudentDetails = mongoose.model("StudentDetails",StudentSchema);

module.exports = StudentDetails