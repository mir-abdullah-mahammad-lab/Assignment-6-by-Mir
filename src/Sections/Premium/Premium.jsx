import React from 'react';

const Premium = () => {
    return (
        <div className='container mx-auto flex flex-col items-center space-y-3 my-10'>
            <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
            <p className='text-gray-400'>Choose from our curated collection of premium digital products designed  <br />
               to boost your productivity and creativity.</p>
               <div className='flex gap-2'>
                <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">
                    Products</button>
                <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">
                    Cart(2)</button>
               </div>
        </div>
    );
};

export default Premium;