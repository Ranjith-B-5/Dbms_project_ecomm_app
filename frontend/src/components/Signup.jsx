import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";



function Signup()
{
function handleSubmit(e) {
    axios
        .post('http://localhost:3000/signup', {
            name: name,
            password: password,	
            email: email	})
        .then((res) => {
                alert("signup successful")
            window.location.href = '/';
        })
        .catch((err) => {
            console.log(err);
        });
}
    
   
    const [name , setName] = useState('');
    const [email,setEmail] = useState('');
    const [password , setPsswd] = useState('');

    return(
        <div className="h-screen w-full bg-slate-400 pt-44">
            <form onSubmit={(e)=> {handleSubmit(e)}}>
        <div className="h-72 w-96 mx-auto bg-slate-600 rounded shadow-lg items-center">
            <div className="flex flex-col items-center p-12">
            <input className =" w-64 h-8 rounded-md" type= "text" value={email} placeholder="Email" required onChange={(e)=> {setEmail(e.target.value)}}></input>
            <input className ="m-4 w-64 h-8 rounded-md" type= "text" value={name} placeholder="Username" required onChange={(e)=> {setName(e.target.value)}}></input>
            <input className =" w-64 h-8 rounded-md" type= "password" value={password} placeholder="Password" required onChange={(e)=> {setPsswd(e.target.value)}}></input>
            <div className="flex flex-row justify-around w-64 ">
            <Button text = "SignUp"></Button>
            </div>
            </div>
        </div>
        </form>
        </div>
    )
}

export default Signup;
