const userModel=require('../Models/User');
const bcrypt=require('bcrypt');
//update user
const update=async (req,res,next)=>
{
   if(req.body.userId===req.params.id||req.body.isAdmin)
   {
               if(req.body.password)
               {
                   try
                   {
                       const salt=await bcrypt.genSalt(10);
                       req.body.password=await bcrypt.hashSync(req.body.password,salt);
                   }catch(err)
                   {
                       return res.status(500).json(err)
                   }
               }
               try{
                   const user=await userModel.findByIdAndUpdate(req.params.id,{
                       $set:req.body
                   })
                   res.status(200).json("user updateuser");
               }catch(err)
               {
                   res.status(500).json(err);
               }
   }
   else
   {
res.status(500).json("you cannot update others account")
   }
}
const deleteOne=async (req,res,next)=>
{
    if(req.body.userId===req.params.id)
   {
              
               try{
                   await userModel.findByIdAndDelete(req.params.id)
                   res.status(200).json("user deleted");
               }catch(err)
               {
                   res.status(500).json(err);
               }
   }
   else
   {
res.status(500).json("you cannot delete others account")
   }
}
const showOne=async (req,res,next)=>
{
    try{
        const user=await userModel.findById(req.params.id);
        const{password,updatedAt,__v,...other}=user._doc
        res.status(200).json(other);
    }catch(err)
    {
              res.status(500).json(err)
    }
    
}
module.exports={update,deleteOne,showOne}