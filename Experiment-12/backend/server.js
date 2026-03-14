const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Student schema
const Student = mongoose.model("Student", {
    name: String,
    studentId: String,
    grade: String
});

// GET students
app.get("/api/students", async (req,res)=>{
    const students = await Student.find();
    res.json(students);
});

// ADD student
app.post("/api/students", async (req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

// DELETE student
app.delete("/api/students/:id", async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({message:"Student deleted"});
});

// UPDATE student
app.put("/api/students/:id", async (req,res)=>{
    const updated = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updated);
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});