import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import {add, multiply} from '../utilities/calculate';


const Cosmetics = () => {
    const num1 = 2;
    const num2 = 3;
    const total = add(num1, num2);
    const result = multiply(num1, num2);
    const cosmetics = [
        {id:1, product:"Alta", amount:200},
        {id:2, product:"Neil-Polish", amount:400},
        {id:3, product:"Churi", amount:300},
        {id:4, product:"Churi", amount:600},
        {id:5, product:"Kajol", amount:100}
    ]
    const [cosmetic2, setCosmetic2] = useState([]);
    useEffect(()=>{
        fetch('data.json')
            .then(response=> response.json())
            .then(data => setCosmetic2(data))
    },[])
    return (
        <div>
            <h1>Welcome to Cosmetics Store</h1>
            <p>Total : {total} Taka</p>
            <p>Result : {result}</p>
            {
                cosmetics.map(cosmetic => 
                    <Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>
                )
            }
            {
                cosmetic2.map(cosmetics2 =>
                    <Cosmetic key={cosmetics2.id} 
                    cosmetic={cosmetics2}>
                    </Cosmetic>
                )
            }
        </div>
    );
};

export default Cosmetics;