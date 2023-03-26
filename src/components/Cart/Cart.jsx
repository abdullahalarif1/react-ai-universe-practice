import React, { useEffect, useState } from 'react';
import CartProps from './CartProps';

const Cart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    },[])
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10'>
            {
                data.map(data => <CartProps data={data}
                key={data.id}></CartProps>)
            }
        </div>
    );
};

export default Cart;