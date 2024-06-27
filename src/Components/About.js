
import Info from "./Ourinfo";
import React from "react";

class About extends React.Component {
       
    render(){
        return (
            <div id = "about">
                <h1 >About Us</h1>
                <Info name={"Ankit"} location={"Haryana"}/>
            </div>
        );

    }
}

export default About;