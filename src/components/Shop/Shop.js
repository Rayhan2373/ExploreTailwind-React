import React from "react";
import useCart from "../../Hooks/useCart";
import Cart from "../Cart/Cart";
import { addToDB } from "../LocalStorage/LocalStorage";
import Products from "../Products/Products";
import './Shop.css'

const Shop = () => {
    const[cart, setCart] = useCart()
    const handleAddToCart=(product)=>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDB(product.id)
    }
    return (
        <div className="shop-container">
            <div>
                <Products handleAddToCart={handleAddToCart}/>
            </div>
            <div className="bg-pink-300">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
