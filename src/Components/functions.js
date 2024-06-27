

export const rated_restaurant = (res1,setres1) =>{
    const filltered_list = res1.filter((temp)=>
                {return temp.info.avgRating>4.3})
                setres1(filltered_list);
}

export const search = (res1,searchText,setres1) =>{
    const input = document.getElementById("input");
    const filltered_list = res1.filter((temp)=>
     temp.info.name.toLowerCase().includes(searchText.toLowerCase())
     )
    setres1(filltered_list);
}


