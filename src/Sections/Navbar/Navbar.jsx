import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md'

const Navbar = () => {
    return (
            <> 
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
    <div className='container mx-auto flex justify-around items-center'>
    <h1 className='text-3xl font-bold ml-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
       <div className='flex space-x-2 items-center '>
        
              <div className='hidden md:flex space-x-3 '>
                    <p>Products</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                    <p>FAQ</p>
              </div>
        
        

        </div>
        <div>
          <div className='flex space-x-5 items-center'>
          <MdOutlineShoppingCart onClick={()=>{console.log('abc')}}></MdOutlineShoppingCart>
          <p><a href="">Login</a></p>
          <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">Get started</button>
        </div>

       </div>




  </div>
  </div>
  
 
 

    
    </>
    );
};

export default Navbar;