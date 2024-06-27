import userContext from "../utils/userContext";
import { useContext } from "react";
const Card = ({resdata}) =>{ 
  const {user}=useContext(userContext);
const {name,avgRating,cloudinaryImageId,cuisines}=resdata?.info;
   return ( <div className="flex flex-col items-center bg-gray-100 card w-[200px]   break-words max-w-sm overflow-hidden shadow-md min-h-[300px]  hover:bg-white hover:w-[205px] hover:h-[305px] duration-100">
   <img className="img1  h-[150px] w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
   <h3 className="font-bold">{name}</h3>
   <h4>{}</h4>
   <h4>Rating : {avgRating} {"⭐"}</h4>
   <h4></h4>
</div>);
}
export const Promotedcards = (Card)=>{
    return (props)=>{
           return(
            <div >
           <label className=" top-4 left-[-2px]  relative w-14 px-1 rounded-md bg-black text-white ">{props?.resdata?.info?.avgRating}{"🌟"}</label>
           <Card {...props}/>
           </div>
           );
    };
};
export default Card;