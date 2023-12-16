import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000


import getHealthApi from './controlers/health.js';
import { postTransactionApi,gettransactionsApi } from './controlers/transaction.js';
import { userSignup ,userLogin} from './controlers/userSignup.js';
// mongodb connection 
const connectToMONGODB = async ()=>{
const connect = await mongoose.connect(process.env.MONGODB_URI);
if(connect){
    console.log("connected to mongodb")
}
}
connectToMONGODB();

// health api
app.get("/health" , getHealthApi)

// post request 

app.post("/api/v1/transactions" ,postTransactionApi)


// get request 

app.get("/api/v1/transactions" , gettransactionsApi)

// signup post reqest

app.post('/api/v1/signups' ,userSignup)
// login post request 

app.post('/api/v1/login' , userLogin)


app.listen(PORT , ()=>{
    console.log("server is on");
   
})