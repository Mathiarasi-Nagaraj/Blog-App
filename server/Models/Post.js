const mongoose=require('mongoose');
const PostSchema=new mongoose.Schema(
    {
           username:
           {
             type:String,
             require:true,
             min:5,
             max:20,
           
           },
         photo: {
                 type:String,
                 default:"",
                
          },
          title:
          { type:String,
            require:true,

          },
         Category:
         {
             type:Array,
             required:true
         },
           desc:{
               type:String,
               max:100
           },
          


    },{timestamps:true}
)
const postModel=mongoose.model("posts",PostSchema);
module.exports=postModel;