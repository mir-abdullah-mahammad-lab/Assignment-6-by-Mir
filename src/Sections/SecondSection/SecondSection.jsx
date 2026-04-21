import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import banner from '../../assets/banner.png'

const SecondSection = () => {
    return (
        <div className='hidden md:flex md:flex-col gap-4 lg:flex lg:flex-row items-center justify-center space-x-4 w-auto h-auto '>
            <div className='bg-white w-auto h-auto max-w-120 max-h-102 space-y-4'>
                <div><button className='bg-gray-200 rounded-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text'>New AI-Powered Tools Available</span></button></div>
                <p className='text-4xl font-bold'>Supercharge your <br /> Digital Worlflow</p>
                <p className='text-[16px] text-gray-500'>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />Explore Products
                </p>
                <div className='flex gap-2 '>
                    <button className="btn btn-primary">Explore Product</button>
                    <button className="btn btn-primary"><span><CiPlay1 /></span>Watch Demo</button>
                </div>

            </div>
            <div className=''>
                <img src={banner} alt="" height={500} width={300} />
            </div>
        </div>
    );
};

export default SecondSection;