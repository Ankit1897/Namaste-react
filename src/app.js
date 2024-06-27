import React, { Suspense, lazy, useEffect, useState }  from "react"
import ReactDOM from "react-dom/client";
import Body  from "./Components/Body";
import Header from "./Components/Header"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/restaurentMenue";
import { useParams } from "react-router-dom";
import userContext from "./utils/userContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/cart";
const App = () =>{
  const [username,setusername]=useState("Ankitpoonia");
  useEffect(()=>{
        
      // setusername("Ankit");
  },[]);
  return (<div className="body">
    <Provider store={appStore}>
  <userContext.Provider value={{user:username, setusername}}>
   <Header/>
   <Outlet/>
 </userContext.Provider>
 </Provider>
 </div>);
}
//  const {resId}= useParams();
const Grocery = lazy(()=>import("./Components/Grocery"));
const appRouter = createBrowserRouter([
     { 
        path : "/",
        element : <App/>,
        children :[
            {
                 path:"/",
                 element:<Body/>
            },
            {
                path :"/about",
                element :<About/>,
            },
            {
              path : "/contact",
              element:<Contact/>
            },
            {
              path : "/grocery",
              element : <Suspense><Grocery/></Suspense>
            },
            {
              path : "/restaurant/:resId",
              element :<RestaurantMenu/>
            },
            {
              path : "/cart",
              element :<Cart/>
            }
        ],

        errorElement : <Error/>,
     },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);