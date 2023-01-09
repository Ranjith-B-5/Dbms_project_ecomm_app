import React from "react";
import Menu from "./Menu";
import Cimage from './Cimage';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import order_image from "../images/order_image.jpg"



function Cart()
{

    const [pimg, setImage] =  useState([]);
	const [ orderaddress, setOaddress ] = useState('');
	const [ pincode, setPincode ] = useState('');
	const [ mobnum, setMobnum ] = useState('');
	const [ landmark, setLandmark ] = useState('');
	const [totamount , setAmount] = useState(0);
	const [ordercard , setConfirmOrder] = useState(0);
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
		return dataset;
	}

	function totAmount (data)
	{

		var amount = 0;
		for(let i=0;i<data.length;i++)
		{
			amount = amount+(data[i].Price*data[i].qty);
		}
		setAmount(amount)
	}
	
	function confirmOrder()
   {
	if(ordercard===0)
		setConfirmOrder(1)
	else 
		setConfirmOrder(0)
	}

	async function placeOrder(e)
	{
		axios
		.post('http://localhost:3000/confirmorder', {
			pimg:pimg,
			username : username,
			orderaddress: orderaddress,
			pincode: pincode,
			mobnum: mobnum,
			landmark: landmark
				})
		.then((res) => {
			console.log(res.data)
			// setOaddress('')
			// setPincode('')
			// setMobnum('')
			// setLandmark('')
			alert("order placed successfully ✅")
			window.location.href = '/'
		})
		.catch((err) => {
			console.log(err);
		});
             
		
		
		if(ordercard===0)
		setConfirmOrder(1)
	   else 
		setConfirmOrder(0)
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
		<div className="flex flex-row justify-center items-center">
        <div className="m-0 w-full h-full bg-gray-100 pr-64 pt-4 position:absolute">
            <div className="grid grid-cols-2 gap-4 p-4">{pimg?.map((props) => <Cimage id={props.PID} source={props.image} desc={props.PDesc} price={props.Price} pname={props.PName} quantity={props.qty}/>)}</div>
        <Menu />
		{pimg.length!==0&&<div className="w-full h-18 flex flex-row justify-center align items-center">
	<div className="h-10 flex-1 bg-white text-center pt-2 border-solid border-y-2 border-l-2 ml-4 border-black">Total Amount : {totamount}</div>
		<button onClick={confirmOrder} className="flex-1 justify-items-stretch h-10  border-solid border-2 mr-4 border-black bg-green-700  hover:bg-green-600 text-cyan-50" >Place Order</button>
		</div>}
    </div>
	{ordercard!==0&&<div className="w-full h-screen z-30 bg-black absolute top-0 opacity-60">
		</div>}
		{ordercard!==0&&<div className=" flex-1 w-2/5 h-3/4 z-40 bg-white absolute top-0 mt-14 rounded-md ">
			<p className="py-2 text-2xl font-mono text-center">Order Info</p>
			<div className="w-5/5 h-36 flex flex-row justify-center items-center"><img className="w-36 h-28" alt="order" src={order_image}></img></div>
			<p className="py-2 text-xl font-sans pl-3">Enter Delivery Address</p>
			<form onSubmit={(e)=> {placeOrder(e)}} className="flex flex-col">
			<input
							className="ml-3 mt-2 p-3 w-3/5 h-8 border-solid border-slate-400 border-b-2 focus:outline-none"
							type="text"
							value={orderaddress}
							placeholder="Address"
							required
							onChange={(e) => {
								setOaddress(e.target.value);
							}}
						/>
						<input
							className="ml-3 mt-2 p-3 w-3/5 h-8 border-solid border-slate-400 border-b-2 focus:outline-none"
							type="text"
							value={pincode}
							placeholder="Pincode"
							required
							onChange={(e) => {
								setPincode(e.target.value);
							}}
						/>
						<input
							className="ml-3 mt-2 p-3 w-3/5 h-8 border-solid border-slate-400 border-b-2 focus:outline-none"
							type="text"
							value={landmark}
							placeholder="Landmark"
							required
							onChange={(e) => {
								setLandmark(e.target.value);
							}}
						/>
						<input
							className="ml-3 mt-2 p-3 w-3/5 h-8 border-solid border-slate-400 border-b-2 focus:outline-none"
							type="text"
							value={mobnum}
							placeholder="Mobile number"
							required
							onChange={(e) => {
								setMobnum(e.target.value);
							}}
						/>
		<div className="flex flex-row justify-center items-center">
		<button className=" mt-14 h-10  border-solid border-2 mr-4 p-1.5 rounded-md bg-green-700  hover:bg-green-600 text-cyan-50" >Confirm Order</button>
		</div>
		</form>
	</div>}
	</div>
    )
}

export default Cart;