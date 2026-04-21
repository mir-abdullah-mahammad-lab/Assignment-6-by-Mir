import React from 'react';

const CartListCard = ({c, price}) => {
    return (
        <div>
            
            <div className='flex flex-row items-center justify-center'>
                <div className='flex justify-between p-5 w-1/2'>
                <div className='flex gap-3 items-center justify-center'>
                <div>
                    <img src={c.imageIcon} alt="" />
                </div>
            <div>
                <p>{c.name}</p>
                <p>${c.price}</p>
            </div>
            </div>
            <button className="btn btn-active btn-error">Remove</button>
            </div>
            </div>
            
            
        </div>
    );
};

export default CartListCard;