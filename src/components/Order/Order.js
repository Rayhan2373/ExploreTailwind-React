import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import { removeFromDB } from '../LocalStorage/LocalStorage';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Order.css'

const Order = () => {
    const [cart] = useCart()
    let price = 0;
    let shipping = 0;
    let total = 0;
    for (const product of cart) {
        price = price + product.price
        shipping = shipping + product.shipping;
        total = price + shipping;
    }
        return (
            <div className='order-container grid md:grid-cols-2 grid-cols-1 pt-5 justify-center items-center'>
                <div className="ordered-product w-80 mx-auto">
                    {
                        cart.map(product=><OrderProduct product={product}></OrderProduct>)
                    }
                </div>
                <div className="cart-calculation  h-80 w-64 mx-auto">
                    <div className='md:fixed  w-64 bg-red-300 mt-5 p-2'>
                        <h1 className='text-2xl font-bold'>Cart <span className='text-red-600'>Details</span></h1>
                        <hr className='mb-3' />
                        <h2>Seleted Items :{cart.length}</h2>
                        <p>Price : ${price}</p>
                        <p>Shipping : ${shipping}</p>
                        <p>Grand Total : ${total}</p>
                        <div className='order-calcu'>
                            <Link to='/order'>
                                <button className=' bg-green-400  hover:bg-green-600 font-500  w-40 p-2 mt-3 rounded'>Proceed CheckOut</button>
                            </Link>
                            <button onClick={() => removeFromDB()} className='inline-flex justify-center items-center text-lg  bg-red-400 hover:bg-red-600 w-40 font-500 py-1 mt-3 rounded'>Clear Cart <MdDelete className='ml-3 text-3xl' /></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default Order;