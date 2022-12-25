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
        database: "ecommerceapp",
        multipleStatements: true
    }
);



app.post('/', async (req, res) => 
  {
    const {name , password} = req.body
    const [rows] = await con.execute(
      "SELECT * from user WHERE Name = ? AND Password = ? ",[name,password])
      console.log(rows)
        res.send(rows);
  });

app.get('/',async (req ,res)=>
{
  const [rows] = await con.execute("SELECT * from product");
  res.send(rows);
  
})
  



  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

}


main();