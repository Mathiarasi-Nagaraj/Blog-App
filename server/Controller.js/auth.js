const userModel=require('../Models/userModel');
const bcrypt=require('bcrypt');
const register=async (req,res,next)=>
{

try{
    //to generate hashed password
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
    const newUser=new userModel({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    });
    const user=await newUser.save();
    res.status(200).json("user registered ");
} catch(err)
{
    res.status(400).json(err);
}

}
const login=async (req,res,next)=>
{
try{
    const user=await userModel.findOne({email:req.body.email});
    !user&&res.status(404).json("User not found")
    const validPassword= bcrypt.compare(req.body.password,user.password);
    !validPassword&&res.status(404).json("wrong password")
   res.status(200).json(user);
}
catch(err)
{
   res.status(500).json(err)
}
}


module.exports={register,login};