const Category=require('../Models/Category');
const post=async (req,res,next)=>
{
  const cat=new Category(req.body)
  try{
      const savedcat= await cat.save();
      res.status(200).json(savedcat);
       
  }
  catch(err)
  {
      res.status(err).json(err)
  }

}
const get=async (req,res,next)=>
{
    try{
        const cat=await Category.find();
        res.status(200).json(cat);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
module.exports={post,get};