import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Tooltip } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';

        axios.get(url)
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlephone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlephone;
                })
                setPhones(phoneData);
            })
    },[])
    return (
        <BarChart width={500} height={200} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <Tooltip></Tooltip>
        </BarChart>
    );
};

export default PhoneBar;