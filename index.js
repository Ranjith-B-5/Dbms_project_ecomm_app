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

  app.post('/home', async (req,res)=>
  {
    const {pid,user,tprice} = req.body;
    try{
      const [rows]= await con.execute(
        "INSERT INTO cart (username,pid,tprice) VALUES (?,?,?)",[user,pid,tprice])
      res.send(rows)
    }
    catch(error)
    {
      res.status(500).send({error: error.message})
    }
  })

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
  
app.get('/cart',async (req ,res)=>
{
  const uname= (req.query.user)// accessing data from get req params
  try{
  const [rows] = await con.execute("select * from product,cart where product.PID = cart.pid AND cart.username = ?",[uname])
  res.send(rows);
  }
  catch(error)
  {
    res.status(500).send({error: error.message})
  }
  
})

app.post('/removeproduct', async (req,res)=>
{
  const {pid,user} = req.body;
  try{
    const [rows]= await con.execute(
      "DELETE FROM cart WHERE username = ? AND pid = ?",[user,pid])
    res.send(rows)
  }
  catch(error)
  {
    res.status(500).send({error: error.message})
  }
})

app.post('/incdec', async (req,res)=>
{
  const {pid,user,qty} = req.body;
  try{
    const [rows]= await con.execute(
      "UPDATE cart SET qty = ? WHERE username = ? AND pid = ?",[qty,user,pid])
    res.send(rows)
  }
  catch(error)
  {
    res.status(500).send({error: error.message})
  }
})

app.post("/confirmorder",async(req,res)=>
{
  console.log("inside confirm order")
  const {pimg,username,orderaddress, pincode,mobnum,landmark} = req.body;
  try{
    const [rows1] = await con.execute(
      "INSERT INTO pdtorder (ouname,oaddress,pincode,mobnum,landmark) VALUES (?,?,?,?,?)",[username,orderaddress,pincode,mobnum,landmark])
      const [rows2] = await con.execute("DELETE FROM CART WHERE username=?",[username])

      res.send({rows1,rows2})
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