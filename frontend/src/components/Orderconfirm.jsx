import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Orderconfirm()
{

    async function orderHandle()
    {
        axios.get("http:http://localhost:3000/orderconfirm").then()
        {

        }
    }

    useEffect(()=>
	{
		orderHandle.then((data)=>
        {

        })
	},[])

    return(
        <div className="w-full h-screen bg-slate-50">hello user</div>
    )
}

export default Orderconfirm;