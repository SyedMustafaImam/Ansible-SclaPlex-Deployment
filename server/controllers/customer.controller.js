const db= require('../models/index')
exports.list_customers=(req,res)=>{
    db.Users.find()
    .then(result=>{
        console.log(result)
        res.status(200).json({message:"Working Properly"})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something Went Wrong"})
    })
}
exports.delete_customer=(req,res)=>{
    console.log('We are deleting now',req.body)
    var ar=[ "smustafa086@gmail.com", "davi@gmail.com"]
    try{
     ar.forEach(element => {
        console.log(element)
         db.Users.findOneAndDelete({username:element})
         .then(result=>{
             console.log("deleted",result)
             res.status(200).json({message:"Deleted"})
         }).catch(err=>{
             console.log(err)
             res.status(500).json({error:"Something Went Wrong"})
         })
     });
    }catch(err){
        console.log(err)
    }
}
exports.update_customer=(req,res)=>{
    
}