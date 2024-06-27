import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, clearcart, removeitem, updateitem } from "../utils/cartSlice";

const Items = ({item,setitemCard})=>{
    const items = useSelector((store)=>store.cart.item);
    var x=0;
    for(var i=0;i<items.length;i++)
    {
        if(items[i][0]?.card.info.id==item?.card.info.id)
        {
              x=items[i][1];
        }
    }

    const [numItems,setnumsItems]=useState(x);
    const dispatch = useDispatch();
    const additems = ()=>{
         setnumsItems(numItems+1);
    }
    const cutitem = () =>{
        if(numItems==1)
        {    
            handleClick();
            dispatch(removeitem([item,numItems]));
           
        }
        if(numItems>0)
        setnumsItems(numItems-1);
        
        
    }
    const handleClick=()=>{
       
        setitemCard(false)
    }
    const  handleadditem= (item)=>
     {
        if(numItems&&!x)
         dispatch(additem([item,numItems]));
        else if(x!=0)
        {
            dispatch(updateitem([item,numItems]));
        }
        
         handleClick();
     }
    const {name,imageId,price, defaultPrice
    }=item?.card.info;
  
    return (
        <div className="fixed z-10 inset-0 cursor-default bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm ">
             
             <div className="flex flex-col items-center p-2 bg-white w-10/12 md:w-1/3 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
             <button className="relative left-48 top-[-15px]" onClick={()=>{handleClick()}}>{"✖"}</button>
                <span className=" w-64 flex items-center flex-col">
                    <img className="rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
                </span>
                <span className="font-bold txt-2xl">
                    <h4 >{name}</h4>
                    <h4>price : ₹{price?price/100:defaultPrice/100}</h4>
                </span>
                <span className="flex flex-row">
                    <button className="rounded-md w-10 border-black border-2 px-3 m-2"
                    onClick={()=>{cutitem()}}>{"➖"}</button>
                     <div className="rounded-md border-2 border-black w-12 font-bold text-3xl ">{numItems}</div>
                    <button className="rounded-md w-10 border-black border-2 px-3 m-2" 
                      onClick={()=>{additems()}}>{"➕"}</button>
                </span>
                <button className="rounded-md bg-black text-white w-20 m-2 font-bold"
                    onClick={()=>{handleadditem(item)}}>Add</button>
             </div>
        </div>
    );

}
export default Items;