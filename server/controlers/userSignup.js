import User from "../models/user.js"
import responder
 from "../utils.js"

const userSignup = async (req,res)=>{
const {name,email,password,phoneNo,gender} = req.body

const signupsdata = new User({
    name,email,password,phoneNo,gender
})
try{
    const saveUser = await signupsdata.save();
    return responder({res,data:saveUser,sucess:true,message:'singup succesfully'});
}
catch(e){
return responder({res,sucess:false,message:e.message});
}


}

// login 

const userLogin = async (req,res)=>{
const {email,password} = req.body
if(!email || !password){
    return responder({res,sucess:false,message:"please ente the email and password"})
}
const finddata = await User.findOne({
    email:email,
    password:password
})
if(finddata){
    return responder({res,sucess:true,data:finddata,message:"login successfully"})
}
else{
    return responder({res,sucess:false,message:"invide cretantions"})
}

}
export {userSignup,userLogin} 