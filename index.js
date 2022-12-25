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
    try{
    const {name , password} = req.body
    const [rows] = await con.execute(
      "SELECT * from user WHERE Name = ? AND Password = ? ",[name,password])
      console.log(rows)
        res.send(rows);
    }
    catch(error)
    {
      res.status(500).send({error: error.message})
    }
  });

  app.post('/signup', async (req, res) => 
  {
    const {email, name , password} = req.body
    try{
    const [rows] = await con.execute(
      "INSERT INTO user(email,name,password) VALUES(?,?,?)",[email,name,password])
        res.send(rows);
    }
    catch(error)
    {
      res.status(500).send({error: error.message})
    }
  });

app.get('/',async (req ,res)=>
{
  try{
  const [rows] = await con.execute("SELECT * from product");
  res.send(rows);
  }
  catch(error)
  {
    res.status(500).send({error: error.message})
  }
  
})
  



  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

}


main();