
import { useState } from "react";
import ItemList from "./ItemList";
const Catagories = ({data,setshowIndex,index,showIndex}) =>{
    
    
    const handle = ()=> {
        if(showIndex!=index)
        setshowIndex(index)
        else
        setshowIndex(-1);
       
    };
    

    return (
        <div >
             <div className="w-[600px] cursor-pointer bg-gradient-to-b from-white to-gray-100  flex justify-between h-10 m-2 items-center border-b-2 border-gray-300" onClick={handle}>
             <span className=" font-bold text-xl">{data.title}({data.itemCards.length})</span>
             <span>{"🔽"}</span>
             </div>
             <div>
                {
                    (showIndex==index)&&data.itemCards.map((item)=>(
                      <ItemList items={item}/>
                    ))
                }
             </div>
        </div>
    );
}

export default Catagories;