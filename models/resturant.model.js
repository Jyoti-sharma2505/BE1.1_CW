const mongoose =require("mongoose");

const ResturantSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    cuisine :[{
        type:String,
        required:true,
    }],
    location :{
        type:String,
        required:true,
    },
    rating :{
        type:Number,
        min:0,
        max:5,
        default:0,
    },
    reviews :[{
        type:String,
    }],
    website :{
        type:String,
    },
    phoneNumber :{
        type:Number,
        required:true,
    },
    openHours :{
        type:String,
    },
    priceRange :{
        type:String,
    },
    reservationsNeeded:{
        type:Boolean,
        default:false,
    },
    isDeliveryAvailable:{
        type:Boolean,
        default:false,
    },
    menuUrl :{
        type:String,
        required:true,
    },
    photos :[{
        type:String,
    }]
},{ timestamps: true })

const Resturant = mongoose.model("Resturant",ResturantSchema);

module.exports= Resturant;