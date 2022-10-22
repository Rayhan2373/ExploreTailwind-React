import React from 'react';

const ProductContainer = ({product, handleAddToCart}) => {
    const {name, img, price, shipping, seller} = product
    return (
        <div className='w-40 border border-gray-300 rounded-lg mb-5'>
            <img className='w-40 h-32 rounded-t-lg' src={img} alt="" srcSet="" />
            <div>
                <h1 className='text-lg ml-2'>{name.slice(0,10)}</h1>
                <p className='ml-2'><small>Price : ${price}</small></p>
                <p className='ml-2'><small>Shipping : ${shipping}</small></p>
                <p className='ml-2'><small>Seller : ${seller}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='w-full rounded-b-lg py-1 bg-orange-500 hover:bg-orange-700'>
            Add to Cart
            </button>
        </div>
    );
};

export default ProductContainer;