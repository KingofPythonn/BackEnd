import express from "express";
const app = express();
const port = 3000;

let type
let adv

app.get("/", (req, res) => {

//    const today=new Date()
   const today= new Date("June 25, 2023 11:13:00");

   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day = weekday[today.getDay()];
   console.log(day)
   if (day =="Friday"||day =="Thursday"){
      type="weekend";
    }
else{
    type="weekday";

}

  res.render("index.ejs",{
    daytype:type,
    advice:adv,
  });



});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
