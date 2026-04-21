import React from 'react';
import CartListCard from '../CartListCard/CartListCard';

const CartListView = ({cartListItem, price}) => {
    console.log('yyyyyyyyyyyyyyyyyy',cartListItem)
    console.log(cartListItem[0].name)
    return (
        <div className='text-xl'>
            <p>Your Cart</p>
            {cartListItem.map(c => {return <CartListCard c={c} price={price}></CartListCard>})}
            <div className='flex flex-col items-center justify-center'>
                <div className='w-1/2 flex justify-between p-5'>
                <p>Total:</p>
                <p>{price}</p>
            </div>
            <button className='w-1/2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Proceed To Checkout</button>
            </div>
        </div>
    );
};

export default CartListView;