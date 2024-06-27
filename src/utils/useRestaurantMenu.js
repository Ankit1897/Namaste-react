import { useEffect,useState } from "react";
import { Menu_URL } from "./Constants";

const useRestaurantMenu = (resId)=>{
    const [menu,setmenu] = useState([]);
     const [res, setres] = useState([]);
     const [data,setdata]=useState([]);
    useEffect(()=>{
        Data();
    },[]);

    const Data = async ()=>{
        const fetched_data = await fetch(Menu_URL+resId);
        const  data  = await fetched_data.json();
    
        var cat;
        for(let i=0;i<data.data?.cards.length;i++)
        {
          if(data.data?.cards[i]?.card?.card?.info!=undefined)
          setres(data.data?.cards[i]?.card?.card?.info)
        }
        let n=0;
        let j=0;
         for(let i=0;i<data.data?.cards.length;i++)
        {
          if(data.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards!=undefined)
          {
            n=data.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length;
            j=i;
          }

        }
        
        
        
        for(let i =0;i<n;i++)
        {
          if(data.data?.cards[j]?.groupedCard?.cardGroupMap?.REGULAR?.cards!=undefined)
           {
             cat =data.data?.cards[j]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>
              item?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            
             )
             
           }
        }
    
        setdata(cat);
      
   
 }

 return {data,res};
}
export default useRestaurantMenu;