const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {
           username:
           {
             type:String,
             require:true,
             min:5,
             max:20,
             unique:true
           },
           email:
           {
            type:String,
            require:true,
            min:5,
            max:20,
            unique:true

           },
           password:
           {
            type:String,
            require:true,
            min:6
           },
           profilePicture:
           {
            type:String,
            default:""
           },
   
        

    },{timestamps:true}
)
const userModel=mongoose.model("User",UserSchema);
module.exports=userModel;