const POST=require('../Models/Post');
const post=async (req,res,next)=>
{  const newPost=new POST(req.body);
    try{
         
          const savedpost=await newPost.save();
          res.status(200).json(savedpost);
    }catch(err){
            console.log(err)
    }
}
const get=async (req,res,next)=>
{
    try{
           const posts= await POST.find({userId:req.params.id})
            res.status(200).json(posts);
    }catch(err)
    {
        console.log(err);
    }
}
const update=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          if(currpost.userId===req.body.userId)
          {
                  await  currpost.updateOne({$set:req.body});
                  res.status(200).json("updated ")
          }
          else{
              res.status(404).json("you cannot update others post");
          }
    }catch(err){
            console.log(err)
    }
}
const deleteone=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          if(currpost.userId===req.body.userId)
          {
                  await  currpost.deleteOne();
                  res.status(200).json("deleted ")
          }
          else{
              res.status(404).json("you cannot delete others post");
          }
    }catch(err){
            console.log(err)
    }
}
const like=async (req,res,next)=>
{
    try{
          const currpost=POST.findById(req.params.id)
          if(currpost.userId===req.body.userId)
          {
                  await  currpost.deleteOne();
                  res.status(200).json("deleted ")
          }
          else{
              res.status(404).json("you cannot delete others post");
          }
    }catch(err){
            console.log(err)
    }
}
module.exports={post,deleteone,update,like}