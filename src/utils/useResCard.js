
import { Res_URL } from "./Constants";
import { useEffect,useState } from "react";



 
const useResCard = ()=>{
     
    const [res2,setres2]=useState([]);
    const [res1,setres1]=useState([]);
    useEffect(()=>{ 
         
        data();
        
    },[])
    const data = async () =>{
     
        const data=await fetch(Res_URL);
        console.log(data);
        const json =await data.json();
    

        console.log(json);
        for(var i =0;i<json.data.cards.length;i++)
        {
            if(undefined!=json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            {
                setres1(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setres2(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            }
        }
        
        
        
        
    }
    // console.log(res1)
    return {res2,res1,setres1};
}

export default useResCard;