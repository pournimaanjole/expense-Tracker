const responder = ({res,data,sucess,message})=>{
return res.json({
    sucess:sucess || false,
    data: data || null,
    message: message  || null
})
}

export default responder