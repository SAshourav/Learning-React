import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({Option}) => {
    const {features} = Option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-4'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{Option.price}</span>
                <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-2'>{Option.name}</p>
            </div>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            <button className='bg-violet-500 mt-4 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;