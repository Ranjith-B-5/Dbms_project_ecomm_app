import React from "react";
import Menu from "./Menu";
import Cimage from './Cimage';
import { useState, useEffect } from "react";
import axios from "axios";




function Cart()
{

    const [pimg, setImage] =  useState([]);
	const [totamount , setAmount] = useState(0)
	var username = window.localStorage.getItem("user");

	async function populate_img() {
		var dataset = axios.get('http://localhost:3000/cart',
		{params:{user:username}
	}).then((res) => {
			return res.data
		}).catch((err)=>
		{
			console.log(err);
		})
		console.log(dataset)
		return dataset;
	}

	function totAmount (data)
	{
		console.log("in total amount")
		var amount = 0;
		for(let i=0;i<data.length;i++)
		{
			amount = amount+(data[i].Price*data[i].qty);
		}
		setAmount(amount)
	}

	useEffect(()=>
	{
		populate_img().then((data)=>
		{
		setImage(data)
		totAmount(data);
	})
},[])
    return(
        <div className="m-0 w-full h-full bg-gray-100 pr-64 pt-4">
            <div className="grid grid-cols-2 gap-4 p-4">{pimg?.map((props) => <Cimage id={props.PID} source={props.image} desc={props.PDesc} price={props.Price} pname={props.PName} quantity={props.qty}/>)}</div>
        <Menu />
		{pimg.length!==0&&<div className="w-full h-18 flex flex-row justify-center align items-center">
	<div className="h-10  bg-white flex-1 text-center pt-2 border-solid border-y-2 border-l-2 ml-4 border-black">Total Amount : {totamount}</div>
		<button className=" h-10 flex-1  border-solid border-2 mr-4 border-black bg-green-700  hover:bg-green-600 text-cyan-50 r">Place Order</button>
		</div>}
    </div>
    )
}

export default Cart;