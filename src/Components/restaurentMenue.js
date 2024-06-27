import Shimmer from "./shimmerUI";
import Items from "./MenuiItems";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useParams } from "react-router-dom";
import Catagories from "./catagory";
import { useState } from "react";
const RestaurantMenu = () =>{

     
     const {resId} = useParams();
    
     const {data,res}= useRestaurantMenu(resId);
     
     const [showIndex,setshowIndex]=useState(-1);
    
    if(res==undefined)
    return <Shimmer/>;
    // console.log(catagory)
    return (
        <div className = "flex flex-col justify-center items-center ">
            <h1 className="font-bold text-3xl">{res.name}</h1>
            <h3 className="font-bold text-2xl">{"Average-Rating : " + res.avgRatingString}</h3>
            <h3 className="font-bold text-xl">{"Cusines : " + res.cuisines
            }</h3>
            <div className = "">
               {
                data.map((cat,index)=>( 
                    <Catagories data={cat?.card?.card } setshowIndex={setshowIndex}  
                      index={index} id={index}showIndex={showIndex}/>
                ))
               }
            </div>
            
        </div>
    );
}

export default RestaurantMenu;