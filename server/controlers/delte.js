import Transaction from "../models/transaction.js";
import responder from "../utils.js";
const deleteApi = async (req,res) =>{
const {_id} = req.params
const delte = await Transaction.deleteOne({_id:_id})
return responder({res,sucess:true,message:"data delete successfully"})

}

export default deleteApi