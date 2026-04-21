import React from 'react';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-auto h-auto flex flex-col  md:flex-row items-center justify-center bg-neutral '>
            <div>
                 <h1 className='text-3xl font-bold  text-white'>DigiTools</h1>
                 <p className=' text-white text-[15px] '>
                    Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                 </p>
            </div>
            <div className="flex  flex-col md:flex-row text-gray-400 ">
            <div className='flex flex-col m-7'>
                <h6 className='footer-title'>Product</h6>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Templates</a>
                <a className="link link-hover">Integrations</a>
            </div>
            <div className='flex flex-col m-7'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Press</a>
            </div>
            <div className='flex flex-col m-7'>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover">Documentation</a>
                <a className="link link-hover">Help Centre</a>
                <a className="link link-hover">Community</a>
                <a className="link link-hover">Contact</a>
            </div>
            </div>

            <div className='flex flex-col'>
                <p className='text-white inline-block text-center whitespace-nowrap'>Social Links</p>
                <div className='bg-white flex gap-2'>
                    <FaInstagramSquare/>
                <FaFacebookSquare/>
                <FaXTwitter />
                </div>
            </div>
        </div>
    );
};

export default Footer;