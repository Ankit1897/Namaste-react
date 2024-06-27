
const Items = ({menuItem}) =>{
    const {name,imageId,price,itemAttribute,catagory}=menuItem?.card?.info;
    
    return (
        <div id = "menuItem">
             <h3>{name}</h3>
             <div>{ price/100}</div>
             <div>{itemAttribute.vegClassifier}</div>
             <div>{catagory}</div>
        </div>
    );
}
export default Items;