

const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema(
    {
           name:
           {
             type:String,
             require:true,
            
           }


    },{timestamps:true}
)
const postModel=mongoose.model("Category",CategorySchema);
module.exports=postModel;