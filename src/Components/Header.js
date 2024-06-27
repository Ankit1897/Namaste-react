
import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useConection from "../utils/useConection";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
export const Header = () =>{
    const [log,setlog]=useState('Login');
    const online = useConection();
    const {user}=useContext(userContext);
    const item = useSelector((store)=>store.cart.item);
    return (
    <div className="flex justify-between border-2 border-black">
        <div className=" w-24 ">
              <img className="rounded-full" src={LOGO_URL}></img> 
        </div>
        <div className=" flex  items-stretch md:items-center ">
            <ul className="flex flex-row align cursor-pointer ">
                
                <li className="px-3  text-xl hover:text-yellow-400"><Link to="/">Home</Link></li>
                <li className="px-3  text-xl hover:text-yellow-400"><Link to="/about">About Us</Link></li>
                <li className="px-3  text-xl hover:text-yellow-400"><Link to="/contact">Contact Us</Link></li>
                <li className="px-3  text-xl hover:text-yellow-400"><Link to="/grocery">Grocery</Link></li>
                <li className="px-3  text-xl bg-black rounded-md"><Link to="/cart">{"🛒"}<label className="text-white">{item.length}</label></Link></li>
                <li className="px-3  text-xl hover:text-yellow-400">{user}</li>
                <button className="px-3 text-xl bg-blue-500  rounded-md mx-2" onClick={()=>{log=="Login"?setlog('Logout'):setlog('Login')}}>{log}</button>
            </ul>
        </div>
    </div>
)
}
export default Header;