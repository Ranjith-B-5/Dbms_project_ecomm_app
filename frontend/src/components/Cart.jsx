import React from "react";
import Menu from "./Menu";
import Cimage from './Cimage';
import { useState, useEffect } from "react";
import axios from "axios";




function Cart()
{

    const [pimg, setImage] =  useState([]);
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

	useEffect(()=>
	{
		populate_img().then((data)=>
		{
		console.log(data[0].image)
		setImage(data)
	})
},[])
    return(
        <div className="m-0 w-full h-full bg-gray-100">
            <div className="grid grid-cols-2 gap-4 p-8">{pimg?.map((props) => <Cimage id={props.PID} source={props.image} desc={props.PDesc} price={props.Price} pname={props.PName}/>)}</div>
        <Menu />
    </div>
    )
}

export default Cart;