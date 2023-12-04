const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    instructor : {
        type:String,
        required:[true, "Introduction to React Native"]
    },
    description : {
        type:String,
        required:true
    },
    enrollmentStatus : {
        type:String,
        required:true 
    },
    thumbnail : {
        type:String,
        required:true 
    },
    duration : {
        type:String,
        required:true 
    },
    url : {
        type:String,
        required:true 
    },
    schedule : {
        type:String,
        required:true 
    },
    location : {
        type:String,
        required:true 
    },
    feature:{
        type:Boolean,
    },
    prerequisites : [{
        type:String,
        required:true 
}],
    // syllabus : {
    //     type:String,
    //     required:true 
    // },
    syllabus : [
        {
            Day:{
                type:String,
            },
            topic:{type:String,
            },
            content:{
                type:String,
            },
            video:{
                type:String,
            }
        }
    ],

    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema);
