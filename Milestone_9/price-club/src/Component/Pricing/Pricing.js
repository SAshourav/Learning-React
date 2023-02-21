import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'Free', price:0, features: ['Awesome Features' , 'Extra Features', 'Custom Features', 'Will Never Use Custom Features', 'Fabricated Features']},
        {id:2, name:'Medium', price:9.99,features: ['Awesome Features' , 'Extra Features', 'Custom Features', 'Will Never Use Custom Features', 'Fabricated Features']},
        {id:3, name:'Premium', price:19.99,features: ['Awesome Features' , 'Extra Features', 'Custom Features', 'Will Never Use Custom Features', 'Fabricated Features']}
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal Of The Town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(Option => <PriceOption
                    key={Option.id}
                    Option = {Option}
                    >
                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;