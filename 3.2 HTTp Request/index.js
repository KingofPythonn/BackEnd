import express from "express"
const app =express()
const port=3000;

app.get("/",(req,res)=>{
// console.log(req.rawHeaders)
res.send("<h1>Hello Sina<h1>")
})
app.get("/about",(req,res)=>{
    // console.log(req.rawHeaders)
    res.send("<h1>About me <h1> <p>my name is sina<p>")
    })

app.get("/Contact",(req,res)=>{
        // console.log(req.rawHeaders)
        res.send("<h1>Contact <h1> <h2>phone number:09330783017<h2>")
        })


app.listen(port,()=>{

console.log("port running")
}
)