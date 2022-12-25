import React from 'react';
import Pimage from './Pimage';
import Menu from './Menu';
import axios from 'axios';
import { useEffect,useState } from 'react';

function Home() {

	const [pimg, setImage] =  useState([]);

	async function populate_img() {
		var dataset = axios.get('http://localhost:3000').then((res) => {
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

	return (
		<div className="m-0 w-full h-full bg-gray-100 pr-64 pt-14">
			<div className="fixed top-0 z-20 w-full flex flex-row justify-start bg-slate-800 h-16 p-2 shadow-md " />
			<div className="grid grid-cols-2 gap-4 p-8">{pimg?.map((props) => <Pimage id={props.PID} source={props.image} desc={props.PDesc} price={props.Price} pname={props.PName}/>)}</div>
			<Menu />
		</div>
	);
}

export default Home;
