import {  useDispatch, useSelector } from "react-redux";
import { removeitem } from "../utils/cartSlice";
import { UseSelector } from "react-redux";
import { useState } from "react";
import Items from "./Item";
const CartItem = ({items,numberOfItems})=>{
     
      const [itemCard,setitemCard]=useState(false);
    
      const {name,imageId,price, defaultPrice
      }=items?.card.info;
    return (
        <div>
            <div className="flex justify-between m-5 border-b-[1px] border-black">
          <span className="text-m font-bold">
           <h4>{name}</h4>
           <h4>price : ₹{price?price/100:defaultPrice/100}</h4>
           <h3 >Number of Orders : {numberOfItems}</h3>
          </span>
          
          <span className="max-w-max-h-24 max-h-24 flex items-center flex-col">
            
            <img className="max-w-max-h-24 max-h-24 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
            <button className="text-white bg-black rounded-md relative top-[-24px] w-28" 
               onClick={()=>{setitemCard(true)}}>Add/Remove</button>

          </span>
          {itemCard&&<Items item={items} setitemCard={setitemCard}/>}
        </div>
        
        </div>
    );
}

export default CartItem;