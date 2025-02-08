import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req,res,next){
  console.log(req.body)
  
   next()
}
app.use(bandNameGenerator)

app.get("/", (req, res) => {
res.render("index.ejs",{

  
  HtmlContent:"<h1>Enter your name below 👇<h1>",}
)

});

app.post("/submit", (req, res) => {
  res.render("index.ejs",{

    name:req.body["fName"],
    lname:req.body["lName"],

   }
  )


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
