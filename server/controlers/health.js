import responder from "../utils.js"
const getHealthApi = async(req,res)=>{

    return responder({res,sucess:true, data:{},message:"this is health api"})
   
    }

    export default getHealthApi