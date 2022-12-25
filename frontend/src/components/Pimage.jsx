import React from "react"

function Pimage(props)
{

 return(
    <div className="flex flex-row  bg-white shadow-sm p-4 h-56" id={props.id}>
      <div className="flex-1 border-solid border-r-2 object-cover border-slate-300"><img id={props.id} src={props.source} alt="p_image" className="w-48 h-48" ></img></div>
      <div className="flex-1 flex flex-col justify-around pl-4">
        <div className=" flex flex-row font-bold h-12 w-96 items-center">{props.pname}</div>
        <div className="flex flex-row h-40 w-96 items-center">{props.desc}</div>
        <div className="flex-1 text-xl "><text className="font-extrabold">{props.price}</text></div>
        <div className="flex-2 flex flex-row space-between">
        <div className="flex-1 pt-8 pl-8">Qty</div>
        <div className="flex-1 pl-4"><button className="w-24 h-8 bg-red-700 rounded-md text-cyan-50 mt-8">Add to cart</button></div>
        
        </div>
        </div>
    </div>
 )
}

export default Pimage;