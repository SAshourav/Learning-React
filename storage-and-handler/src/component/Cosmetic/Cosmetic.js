import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {product, amount, id} = props.cosmetic; //distructuring
    const addToCart = (id) =>{
        console.log('item Added',id);
    }
    const addToCartWithPera = () =>{
        addToCart(id);
    }
    return (
        <div className='product'>
            <h2>Buy This: {product}</h2>
            <p>Only for: Tk {amount}</p>
            <p><small>The id is: {id}</small></p>
            <button onClick={addToCartWithPera}>Add To Cart</button> {/*direct*/}
            <button onClick={()=>addToCart(id)}>Add To Cart</button> {/*Shortcut*/}
        </div>
    );
};

export default Cosmetic;