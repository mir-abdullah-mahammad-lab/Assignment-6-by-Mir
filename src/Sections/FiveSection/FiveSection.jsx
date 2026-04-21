import React from 'react';
import user from '../../assets/user.png'
import rocket from '../../assets/rocket.png'
import pack from '../../assets/pack.png'

const FiveSection = () => {
    return (
      <div className='w-auto h-auto bg-linear-to-r from-gray-500 to-gray-200 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[15px]'>Start using premium digital tools in minutes, not hours.</p>
            <div className='flex flex-col md:flex-row gap-4'>
                <div className='card-1 '>
                <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body flex flex-col space-y-4">
                                <div className='text-right'>
                                    <button className=' border h-[20px] w-[20px] bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full text-white'>01</button>
                                    </div>

                                    <div className='flex justify-center'>
                                        <img src={user} alt=" providePic" height={30} width={30} />
                                    </div>

                                    <div className='space-y-3'>
                                        <h1 className='font-bold text-center text-xl'>Create Account</h1>
                                        <p className='text-center text-[10px]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                                    </div>
                            
                            </div>
                 </div>
            </div>
              <div className='card-1 '>
                <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body flex flex-col space-y-4">
                                <div className='text-right'>
                                    <button className=' border h-[20px] w-[20px] bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full text-white'>02</button>
                                    </div>

                                    <div className='flex justify-center'>
                                        <img src={pack} alt=" providePic" height={30} width={30} />
                                    </div>

                                    <div className='space-y-3'>
                                        <h1 className='font-bold text-center text-xl'>Create Account</h1>
                                        <p className='text-center text-[10px]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                                    </div>
                            
                            </div>
                 </div>
            </div>
              <div className='card-1 '>
                <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body flex flex-col space-y-4">
                                <div className='text-right'>
                                    <button className=' border h-[20px] w-[20px] bg-linear-to-r  from-[#4F39F6] to-[#9514FA] rounded-full text-white'>03</button>
                                    </div>

                                    <div className='flex justify-center'>
                                        <img src={rocket} alt=" providePic" height={30} width={30} />
                                    </div>

                                    <div className='space-y-3'>
                                        <h1 className='font-bold text-center text-xl'>Create Account</h1>
                                        <p className='text-center text-[10px]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                                    </div>
                            
                            </div>
                 </div>
            </div>
            </div>
        
        
        </div>
    );
};

export default FiveSection;