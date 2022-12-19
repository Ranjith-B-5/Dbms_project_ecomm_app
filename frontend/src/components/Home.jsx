import React from "react";
import Pimage from "./Pimage";
import image_array from "./image_array";
import logout_logo from "../images/logout.svg"


const populate_img = image_array.map((img) =>

<Pimage id= {img.id}></Pimage>
)

function isUserLoggedIn(e)
{
    e.preventDefault();
    window.localStorage.removeItem("user");
    window.location.href ="/";
}

function Home()
{
    return(
        <div className="m-0 w-full h-full bg-gray-100">
        <div className="w-full flex flex-row justify-end bg-slate-600 h-16 p-2 ">
            <button onClick={isUserLoggedIn} className="h-12 w-12 shadow-md bg-slate-50 rounded-full hover:scale-75"><img src={logout_logo} alt="logout icon" className="w-12 h-12"></img></button>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {populate_img}
        </div>
        </div>

    )
}

export default Home;