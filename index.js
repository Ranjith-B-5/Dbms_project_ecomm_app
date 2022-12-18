const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;



var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "cse1",
        multipleStatements: true
    }
);

con.connect(function(err)
{
    if(err) 
    {
    throw err;
    }
    console.log("success");
});

app.get('/',async (req ,res)=>
{
  con.query("use cse1", function(err,result)
  {
      if(err)
      {
          console.log(error);
      }
      else{
          console.log("database changed");
      }
  })
})

app.post('/', async (req, res) => 
  {
    const {name , password} = req.body
    const userinfo = await con.query(
      "SELECT * from users WHERE name = ? AND password = ? ",[name,password],(err, row)=>
      {
        if(err) throw err;
        res.send(row)
      }
    );
  });




  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
