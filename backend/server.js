require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const authRoutes = require("./routes/auth");

const classroomRoutes = require("./routes/api/classroom");

const app = express();
app.use(cors());

app.use("/api/classrooms", classroomRoutes);

app.use(express.json());

app.use(passport.initialize());


app.use("/auth", authRoutes);


const PORT = process.env.PORT||5000;

//MongoDB Connection
mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTechnology: true})

    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.get("/", (req,res) => {
    res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

