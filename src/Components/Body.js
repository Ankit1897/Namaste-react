import { useState } from "react";
import Card from "./Card";
import { useState } from "react";
import { search } from "./functions";
import { rated_restaurant } from "./functions";
import Shimmer from "./shimmerUI";
import useResCard from "../utils/useResCard";
import { Link } from "react-router-dom";
import useResCard from "../utils/useResCard";
import { rated_restaurant, search } from "../Components/functions";
import { Promotedcards } from "./Card";
import userContext from "../utils/userContext";
import { useContext } from "react";
const Body = () =>{ 
    
   
   const [searchText,setsearchText]=useState("");
   const {res2,res1,setres1}=useResCard();
   const Promotedcard=Promotedcards(Card);
   const {user,setusername}=useContext(userContext);
  //  console.log(res1);
    if(typeof(res1)==typeof([])&&!res1.length )
  return (<Shimmer/>);

    return ( 
    
    <div className="flex flex-wrap m-10 justify-center ">
        
        <div className="flex items-center  size-full gap-4">
               <input className="border-[1px] border-solid border-black m-2 px-3  w-80 rounded-md outline-none"
                type="text"
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value)
                }}
                />
               
               <button className="px-3 rounded-md bg-black text-white" onClick={()=>{
                search(res2,searchText,setres1);}}
                >search</button>

               <button className="border-[1px] px-2 rounded-md border-black bg-gray-100" onClick={()=>{ rated_restaurant(res2,setres1)}}
               >top rated Restaurant</button>
               

        </div>
       
        <div className="res-card flex flex-wrap gap-10 justify-center">
            { 
               
              res1.map((item,index)=>( 
                    <Link key={item?.id?item.id:index}  to={"/restaurant/"+item.info.id}><Promotedcard resdata={item}/>
                  </Link>
              ))
                
                
            }
           
        </div>
    </div>
)}
export default Body;