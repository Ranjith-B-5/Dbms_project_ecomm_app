const mysql = require('mysql2/promise');
const express = require("express");
const cors = require("cors");

const { dotenvConfig } = require("custom-env");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;

async function main()
{

const con = await mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "cse1",
        multipleStatements: true
    }
);

// app.get('/',async (req ,res)=>
// {
//   con.query("use cse1", function(err,result)
//   {
//       if(err)
//       {
//           console.log(error);
//       }
//       else{
//           console.log("database changed");
//       }
//   })
  
// })

app.post('/', async (req, res) => 
  {
    const {name , password} = req.body
    const [rows] = await con.execute(
      "SELECT * from users WHERE name = ? AND password = ? ",[name,password])
        res.send(rows);
  });

  



  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

}


main();

