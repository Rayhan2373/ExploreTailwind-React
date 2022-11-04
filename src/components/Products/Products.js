import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import './Products.css'

const Products = ({handleAddToCart}) => {
    const [pageCount, setPageCount] = useState(0);
    const [page , setPage] = useState(1);
    const [size] = useState(10);
    const [products, setProduts]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:9000/products?page=${page}&size=${size}`)
        .then(res=> res.json())
        .then(data=> setProduts(data))
    },[page, size])
    useEffect(()=>{
        fetch('http://localhost:9000/productCount')
        .then(res=> res.json())
        .then(data=>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    },[])
    return (
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ml-2 mt-5'>
        {
            products.map(product=><ProductContainer handleAddToCart={handleAddToCart} product={product}></ProductContainer>)
        }
    </div>
    <div className="d-fle w-auto text-center pagination">
    {
        [...Array(pageCount).keys()]
        .map(number=> (<button 
            className={page === number+1 ? " bg-slate-400" : ""}
            onClick={()=> setPage(number+1)
            }
            >{number+1}</button>))
    }
    
    </div>

        </div>
    );
};

export default Products;
