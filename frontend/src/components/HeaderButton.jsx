import React from "react";


function HeaderButton(props)
{
  
    return(
        <button  className="mx-2 h-12 w-12 bg-slate-800  hover:scale-75"><img src={props.source} alt="logo" className="w-12 h-12 "></img></button>
    )
}

export default HeaderButton;