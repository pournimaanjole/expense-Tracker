// import transaction model
import Transaction from "../models/transaction.js";
import  responder  from "../utils.js";
const postTransactionApi =  async(req,res)=>{
    const {amount,type,category,discription} = req.body
    const tracker = new Transaction({
        amount,type,category,discription
    })

    try{
        const savedtransaction = await tracker.save();
        return responder({res,sucess:true,data:savedtransaction,message:"this data saved succesfully"})
        
    }
    catch(e){

        return responder({res,sucess:false,message:e.message})
      
    }
}

const gettransactionsApi = async(req,res)=>{
    const finddata = await Transaction.find();
    return responder({res,sucess:true,data:finddata,message:"all data find sucessfully"})
  
    }
export {postTransactionApi,gettransactionsApi}