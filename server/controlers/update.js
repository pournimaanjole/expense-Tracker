import Transaction from "../models/transaction.js";
import responder  from "../utils.js";
const updateApi = async (req,res) =>{
const {_id} = req.params
const {amount,type,discription,category} = req.body
const updatedata = await Transaction.updateOne({_id:_id},{$set:{
    amount,type,discription,category
}})
const findupdate = await Transaction.findOne({_id:_id})
return responder({res,sucess:true,data:findupdate,message:"data update succesfully"})

}

export default updateApi