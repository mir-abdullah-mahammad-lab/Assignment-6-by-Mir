import React from 'react';

const Premium = ({productCart, setProductCart, productCount, setProBtn}) => {
    return (
        <div className='container mx-auto flex flex-col items-center space-y-3 my-10'>
            <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
            <p className='text-gray-400'>Choose from our curated collection of premium digital products designed  <br />
               to boost your productivity and creativity.</p>
               <div className='flex gap-2'>
                <button 
                onClick={()=>{setProductCart('product')
                    setProBtn('ProBtn')
                }}
                className= {`btn btn-primary ${productCart === 'product'? `bg-linear-to-r from-[#4F39F6] to-[#9514FA]`:`bg-white text-black`} rounded-2xl`}>
                    Products</button>
                <button 
                onClick={ () =>{setProductCart('cart')
                    setProBtn('cartBtn')
                }} 
                className= {`btn btn-primary ${productCart === 'cart'? `bg-linear-to-r from-[#4F39F6] to-[#9514FA] `:`bg-white text-black`} rounded-2xl`}>
                    Cart ({productCount})</button>
               </div>
        </div>
    );
};

export default Premium;