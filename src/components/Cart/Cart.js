import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>This is for cart</h2>
                <p>Selected items:{quantity}</p>
                <p>Total price: {total}</p>
                <p>Total Shipping: {shipping} </p>
                <p>Tax: {tax}</p>
                <h3>Grand Total: {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;