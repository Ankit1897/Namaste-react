import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleclearCart = ()=>{
          dispatch(clearcart())
    }
    const items = useSelector((store)=>store.cart.item)
    var total_amount =0;
    for(var i=0;i<items.length ;i++)
    {
        total_amount = total_amount+((items[i][0]?.card.info.price)?(items[i][0]?.card.info.price):(items[i][0]?.card.info.defaultPrice))*items[i][1]/100;
    }
    return(
        <div className="flex items-center flex-col">
            <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl">Cart</h1>
            {
                items.length?<button className=" bg-black text-white p-1 rounded-md txt-xl" 
                onClick={()=>{handleclearCart()}}>clearCart</button>:
                <Link to={"/"}><button className=" bg-black text-white p-1 rounded-md txt-xl" 
                >See Your Nearest Restaurant </button></Link>
            }
            </div>

            <div className=" w-[600px]">
                {
                    items.map((item)=>(
                        <CartItem items={item[0]} numberOfItems={item[1]}/>
                    ))
                }
            </div>
            <div className={total_amount?"w-[600px] font-bold text-xl r  border-black border-b-2 ":""}>
                 <h2>{total_amount?"Total amount for all the Items is : ₹"+total_amount:""}</h2>
            </div>
        </div>
    );
}
export default Cart;