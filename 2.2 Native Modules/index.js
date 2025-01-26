const fs =require("fs");
fs.writeFile("massage.txt","hello node",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });