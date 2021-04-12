const express = require("express")
const students = require("./seeder")

const app = express()
const port = 5000;

//home route

app.get("/", (req, res) => {
    res.send("WELCOME TO STUDENTS API");
});
//all students route
app.get("/api/v3/students", (req, res ) => {
    res.json(students)

});
app.get("/api/v3/students/:name", (req, res )=>{
    res.json(studens.filter((student)=> student.name === req.params.name));
});

app.delete("/api/v3/student/name", (req, res)=> {
    res.json(students.filter((student)=> student.name !== req.params.name));
    if (student) {
        res.json({msg: `student deleted ${req.params.name}`,
    })
    }
});
app.put("/api/v3/students/name", (req, res)=> {
    const studentfound = students.some((student)=> student.name === req.params.name);
    studentfound &&
    farmers.forEach((student)=> {
        (student.name=req.body.name)
    })
    res.json(students)
});
app.post("/api/v3/students/name", (req, res) =>{
    const student={
        name:req.body.name,
        age:req.body.age,
    }
    students.push(student)
    res.json(students)
});
app.listen(port, () => console.log(` server started on port ${port}` ));