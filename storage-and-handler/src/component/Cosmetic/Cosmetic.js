import React from 'react';
import { addToDatabase, deleteFromDatabase } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {product, amount, id} = props.cosmetic; //distructuring
    const addToCart = (id) =>{
        addToDatabase(id);
    }
    const deleteFromCart = (id) => {
        deleteFromDatabase(id);
    }
    // const addToCartWithPera = () =>{
    //     addToCart(id);
    // }
    return (
        <div className='product'>
            <h2>Buy This: {product}</h2>
            <p>Only for: Tk {amount}</p>
            <p><small>The id is: {id}</small></p>
            {/* <button onClick={addToCartWithPera}>Add To Cart</button> direct */}
            <button onClick={()=>addToCart(id)}>Add To Cart</button> {/*Shortcut*/}
            <button onClick={()=>deleteFromCart(id)}>Remove From Cart</button> {/*Shortcut*/}
        </div>
    );
};

export default Cosmetic;