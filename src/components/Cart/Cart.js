import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { removeFromDB } from '../LocalStorage/LocalStorage';

const Cart = ({cart}) => {
    let price = 0;
    let shipping = 0;
    let total = 0;
    for (const product of cart){
        price = price + product.price
        shipping = shipping + product.shipping;
        total = price+ shipping;
    }

    return (
        <div className='fixed mt-5 p-2'>
            <h1 className='text-2xl font-bold'>Cart <span className='text-red-600'>Details</span></h1>
            <hr className='mb-3'/>
            <h2>Seleted Items :{cart.length}</h2>
            <p>Price : ${price}</p>
            <p>Shipping : ${shipping}</p>
            <p>Grand Total : ${total}</p>
            <div className='block-flex'>
                <Link to='/order'>
                <button className=' bg-green-400  hover:bg-green-600 font-500  w-40 p-2 mt-5 rounded'>Proceed CheckOut</button>
                </Link>
                <button onClick={()=>removeFromDB()} className ='inline-flex justify-center items-center text-lg  bg-red-400 hover:bg-red-600 w-40 font-500 py-1 mt-5 rounded'>Clear Cart <MdDelete className='ml-3 text-3xl' /></button>
            </div>
        </div>
    );
};

export default Cart;