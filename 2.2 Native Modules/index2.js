const fs =require("fs");
fs.readFile("message.txt","UTF8",(err , data) => {
    if (err) throw err;
    console.log('File content : \n',data);
  });