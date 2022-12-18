import React from "react";
import Pimage from "./Pimage";
import image_array from "./image_array";



const populate_img = image_array.map((img) =>

<Pimage id= {img.id}></Pimage>
)

function Home()
{
    return(
        <div className="m-0 w-full h-full bg-gray-100">
        <div className="w-full bg-slate-600 h-12"></div>
        <div className="grid grid-cols-4 gap-4">
        {populate_img}
        </div>
        </div>

    )
}

export default Home;