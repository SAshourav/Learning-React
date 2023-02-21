import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckIcon className="h-6 w-6 text-white"/>
            <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;