import React from 'react';
import useProducts from '../../Hooks/useProducts'
import ProductContainer from '../ProductContainer/ProductContainer';
import './Products.css'

const Products = ({handleAddToCart}) => {
    const [products] = useProducts()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-5'>
            {
                products.map(product=><ProductContainer handleAddToCart={handleAddToCart} product={product}></ProductContainer>)
            }
        </div>
    );
};

export default Products;
