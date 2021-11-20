const express = require("express")
const app = express()
const mongoose = require("mongoose")
const stu = require("./schema")
//const url = "mongodb+srv://user1:0%^g381m%53ubuUcsBv0NsEACSkY#!@cluster007.tcspy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect("mongodb+srv://test1:test1@cluster007.tcspy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post", async(req,res)=>{
    const name = req.body.Name;
    const regno = req.body.Reg_number;
    const submarks = req.body.Marks;

    try{
        const st = new stu(
            {
                Name:name,
                Reg_number: regno,
                Marks: submarks
            }
        )
        const savedst = await st.save()
        res.json(
            {"message":"Student marks are saved","data":savedst}
        )
    }
    catch(err)
    {
        res.json(err);
    }
})
app.use("/",(req, res)=>{
    res.send("SAIFUS")
    res.json(
        
    )
})
app.listen(3000, ()=>console.log("Express Started"))