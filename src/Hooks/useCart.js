import { useEffect, useState } from "react"
import { getStoredCart } from "../components/LocalStorage/LocalStorage"
import useProducts from "./useProducts"


const useCart=()=>{
    const [cart, setCart] = useState([])
    const [products] = useProducts()
    useEffect( ()=>{
        const storedCart = getStoredCart()
        let saveCart = []
        for(const id in storedCart){
            const addedProducts = products.find(product=> product.id === id)
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                saveCart.push(addedProducts)
            }
        }
        setCart(saveCart)
    },[products])
    return [cart, setCart];
}

export default useCart;