import React from "react";


function HeaderButton(props)
{
  
    return(
        <button  className="mx-2 h-12 w-48 bg-slate-700 flex flex-row hover:scale-75 border-solid border-b-2 mb-3">
            <div><img src={`${props.source}`} alt="logo" className="w-12 h-12"></img></div>
            <div className="pl-12 pt-2"><text className="text-white text-lg">{props.txt}</text></div>
            </button>
    )
}

export default HeaderButton;