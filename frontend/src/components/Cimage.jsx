import React, { useEffect } from "react";
import { useState } from "react";

function Cimage(props)
{
    const [qty, setQty] = useState(1);
    const [tprice, setPrice] = useState(props.price);

    async function decrement()  //issue price not updating on first click
    {
        if(qty===1)
        {setQty(1)}

        else{
            const newQty =  qty-1;
            setQty(newQty)}
            const newtprice = qty*props.price;
        setPrice(newtprice)
    }

    async function increment()
    {
        const newQty =  qty+1;
        setQty(newQty)
        const newtprice = qty*props.price;
        setPrice(newtprice)
    }

return(
    <div className="flex flex-row  bg-white shadow-sm p-4 h-56" id={props.id}>
      <div className="flex-1 border-solid border-r-2 object-cover border-slate-300"><img id={props.id} src={props.source} alt="p_image" className="w-54 h-48" ></img></div>
      <div className="flex-1 flex flex-col justify-around pl-4">
        <div className=" flex flex-row font-bold h-12 w-96 items-center">{props.pname}</div>
        <div className="flex flex-row h-40 w-96 items-center">{props.desc}</div>
        <div className="flex-1 text-xl "><text className="font-extrabold">{tprice}</text></div>
        <div className="flex-2 flex flex-row space-between">
        <div className="flex-1 flex flex-row pt-8 pl-4 pr-4">
            <div className="text-center pt-1 mr-4">Qty:</div>
            <button className ="w-8 h-8 border-solid border-2 shadow-sm border-gray-500"onClick={decrement}>-</button>
            <div className ="w-8 h-8 text-center p-1 border-solid border-y-2 shadow-sm border-gray-500">{qty}</div>
            <button className ="w-8 h-8 border-solid border-2 shadow-sm border-gray-500" onClick={increment}>+</button>
        </div>
        <div className="flex-1 pl-4"><button id={props.id} className="w-24 h-8 bg-red-700 rounded-md hover:bg-red-600 text-cyan-50 mt-8">Remove item</button></div>
        
        </div>
        </div>
    </div>
 )
}

export default Cimage;