
import Items from "./Item";
import { useState } from "react";
const ItemList = ({items})=>{
  const [itemCard,setitemCard]=useState(false);
  
  const handlClick = ()=>{
   
    setitemCard(true)
  }
  
    const {name,imageId,price, defaultPrice
        }=items?.card.info;
    return (
        <div className=" m-5 border-b-[1px] border-black">
          <button className="flex justify-between w-[550px]"
            onClick={()=>{!itemCard&&handlClick()}}>
          <span>
           <h4>{name}</h4>
           <h4>price : ₹{price?price/100:defaultPrice/100}</h4>
          </span>
          <span className="max-w-max-h-24 max-h-24 flex items-center flex-col">
            <img className="max-w-max-h-24 max-h-24 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId}></img>
            
          </span>
          {itemCard&&<Items item={items} setitemCard={setitemCard}/>}
          </button>
        </div>
    );
}
export default ItemList;