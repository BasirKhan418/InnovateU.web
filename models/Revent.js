import mongoose from "mongoose";
const EventRegisteredSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:Number,unique:true},
    ticketid:{type:String,unique:true,required:true},
    orderid:{type:String,required:true,unique:true},
    paymentid:{type:String,default:''},
    paymentstatus:{type:String,default:'pending'},
    paymentamount:{type:String,default:''},
    ticketstatus:{type:String,default:'not claimed'},
    eventname:{type:String,default:''},
    eventdate:{type:String,default:''},
    clg:{type:String,default:''},
    github:{type:String,default:''},
    linkedin:{type:String,default:''},
    title:{type:String,default:''},
    img:{type:String,default:''},
},{timestamps:true})
mongoose.models={}
export default mongoose.model('Revent',EventRegisteredSchema);