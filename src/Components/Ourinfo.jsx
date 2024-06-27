
import React, { Component } from "react";


class Info extends React.Component{

    constructor(props){
       super(props);

       this.state={
         info:{
           name:"employe",
           location :"place",

         },
       }
       
    }
    async componentDidMount(){
             
         const data = await fetch("https://api.github.com/users/Ankit1897");
         const json = await data.json()
         console.log(json);
    }
    render(){
        const {name,location}=this.props;
        return (
            <div id = "info">
               <h1>{name}</h1>
               <h2>{location}</h2>
            </div>
        );
    }
}
export default Info;