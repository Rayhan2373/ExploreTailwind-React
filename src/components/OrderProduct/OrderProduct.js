import React from 'react';
import { MdDelete } from 'react-icons/md';

const OrderProduct = ({ product }) => {
    const { name, price, img } = product;
    return (
        <div className='inline-flex  items-center w-80 bg-pink-300 border border-red-500 rounded-lg'>
            <div>
                <img className='w-16 rounded-l-lg' src={img} alt="" srcSet="" />
            </div>
            <div className='inline-flex  items-center justify-between  w-64'>
                <div className='m-2'>
                    <h1>{name.slice(0, 15)}</h1>
                    <p>Price : ${price}</p>
                </div>
                <div className='inline-flex justify-center items-center m-3'>
                    <button className='text-lg  bg-red-400 hover:bg-red-600 w-10 font-500 py-1 rounded-3xl'> <MdDelete className='ml-1 text-3xl' /></button>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;