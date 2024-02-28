import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i=0; i<cart.length; i++) {
        const totalPrice = cart[i];
        total = total + totalPrice.price;
    }


 
    return (
        <div className=''>
            <h1 className='text-danger text-center mt-4 mb-4'>Added Course</h1>
            <h3 className='text-center mt-4 mb-4'><small>Add Courses: {cart.length}</small></h3>
            <h3 className='text-center mt-4 mb-4'><small>Total Price: {total}$</small></h3>
            
            
        </div>
    );
};

export default Cart;