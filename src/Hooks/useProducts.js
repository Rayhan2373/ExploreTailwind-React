import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products, setProduts]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProduts(data))
    },[])
    return [products, setProduts]
}

export default useProducts;