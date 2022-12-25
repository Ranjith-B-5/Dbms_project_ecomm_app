import React from "react"

function Pimage(props)
{

 return(
    <div className="flex flex-row w-74 h-64 bg-white shadow-sm p-4">
      <div className="flex-1 border-solid border-r-2 object-cover border-slate-300"><img id={props.id} src={props.source} alt="p_image" className="w-48 h-48" ></img></div>
      <div className="flex-1 flex flex-col justify-around">
        <div className="flex-1">{props.pname}</div>
        <div className="flex-3">{props.desc}</div>
        <div className="flex-1">{props.price}</div>
        <div className="flex-2"><button>Add to cart</button></div>
      </div>
    </div>
 )
}

export default Pimage;