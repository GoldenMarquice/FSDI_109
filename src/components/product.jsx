import { useEffect,useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker"

function Product (props){

    const [quantity, setQuantity] = useState (1);



    useEffect(function(){
        console.log("hello im a product");  },[]);

        function onQuantityChange(qty)
        {
            console.log(qty);
            setQuantity(qty);

        }

function handleAddProduct(){
    console.log("adding food to cart");
}

    return (

        <div className="product-container">
        <img alt=" " src={"/images/" + props.data.image}/> 
        <h5> {props.data.title}</h5>
        <div className="prices">
            <label htmlFor="">Price:  {props.data.price.toFixed(2)}</label>
            <label htmlFor="">Total:  {(props.data.price * quantity).toFixed(2)} </label>
            </div>
            <QuantityPicker onChange={onQuantityChange}/>
            <button className="btn btn-sm btn-success" onClick={handleAddProduct}>Add to Cart</button>
        </div>
    )
}

export default Product;