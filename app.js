const express=require("express");
const CourseData=require('./src/model/CourseData')
const app=express();
app.use(express.json())
// courseList=[{
//     "courseTitle":"React",
//     "courseDescription":"React course",
//     "courseDuration":"4 months",
//     "courseDate":"2023-11-01",
//     "courseVenue":"ICT Academy",
// },
// {
//     "courseTitle":"Angular",
//     "courseDescription":"Angular functions",
//     "courseDuration":"5 months",
//     "courseDate":"2023-5-8",
//     "courseVenue":"Z Academy",
// },
// {
//     "courseTitle":"Node JS",
//     "courseDescription":"NODE JS course",
//     "courseDuration":"2 months",
//     "courseDate":"2020-04-06",
//     "courseVenue":"ICT Academy",
// },
// {
//     "courseTitle":"Express js",
//     "courseDescription":"Express js course",
//     "courseDuration":"6 months",
//     "courseDate":"2023-09-01",
//     "courseVenue":"A Academy",
// }
// // ]
// app.get('/getcourses',function(req,res){
//     res.send(courseList);
// })




app.get('/getcourses',function(req,res){
    CourseData.find().then(function(courses){
        console.log(courses);
        res.send(courses);
    })
})
// app.post('/addcourse',function(req,res){
//     console.log(req.body);
//     courseList.push(req.body);
//     res.send(courseList);
    
// })

app.listen(4000);