import { Schema,model } from "mongoose";

const transactionSchema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum :["credit" , "debit"],
        required:true
    },
    category:{
type:String,
enum:["study" ,"business" ,"shopping" ,"investment" ,"rent" ,"other"],
default:"other"
    },
    discription:{
        type:String
    }
}
,{
    timestamps:true
})

const Transaction = model("Transaction" , transactionSchema);
export default Transaction