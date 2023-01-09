import React from "react";
import Menu from "./Menu";
import axios from "axios";
import { useState } from "react";



function Orderpage()
{
    const[orderpdtdetails, setDetails] = useState([])
    const username = window.localStorage.getItem("user")
    axios.get('http://localhost:3000/order',{params:{user: username}})
    .then((res)=>
    {
        const opdetails = res.data;
        setDetails(opdetails)
    }
    )
    .catch((error)=>
    console.log(error))
    
    return(
		<div className="m-0 w-full h-screen bg-gray-100 r-64 pt-14 border-solid">
			<div className="fixed top-0 z-20 w-full flex flex-row justify-end bg-slate-800 h-16 shadow-md p-2">
			</div>
            <div className="text-2xl font-semibold font-mono pt-4 ml-4 text-center pr-80" >Order Summary</div>
            <div className="bg-slate-800 text-white h-8 text-center w-24 ml-8">Order ID: {orderpdtdetails[0].oid}</div>
            <div className="border border-solid ml-8 mr-80 bg-gray-200 ">
                <div className="pl-6 pt-4 pb-4">Ordered on: {orderpdtdetails[0].odate}</div>
                <div className="text-xl font-medium font-sans pt-4 ml-4 pl-2" >Products</div>
                <div className="m-0 w-full h-full bg-gray-200 position:absolute">
                 <div className="grid grid-cols-2 gap-4 p-2 justify-items-stretch">
                    {orderpdtdetails.map((props)=> <div className="pl-4 h-58 p-4 border m-4 shadow-md flex flex-row bg-white">
                    <div className="border-solid border-r-2 object-cover border-slate-300"><img src={props.image} alt="p_image" className="w-54 h-48" ></img></div>
                <div className="flex flex-col pl-4">
                    <div className="font-lg font-semibold pb-1 ">{props.PName}</div>
                <div className="font-thin">Seller: {props.Name}</div>
                <div className="pt-4 fontl-lg font-medium">Rs.{props.Price}</div>
                <div className="pt-1 fontl-lg font-medium">Qty: {props.qty}</div>
                <div className="pt-6 ">Estimated delivery by 15th January 2023</div>
                </div>
                </div>)}
                <div className="pl-4 text-xl"><text>Total Amount: </text>< text className="font-semibold" >Rs.{orderpdtdetails[0].totalamount}</text></div>
                </div>
                </div>
                </div>
            
			<Menu />
		</div>
    )
}

export default Orderpage;