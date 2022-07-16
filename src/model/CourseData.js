const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://abhinavabhii:adhu2919@cluster0.exlmc.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema= mongoose.Schema;
const CourseSchema=new Schema({courseTitle:String,
courseDescription:String,
courseDuration:String,
courseDate:String,
courseVenue:String
});
var CourseData=mongoose.model("courseset",CourseSchema);
module.exports=CourseData;