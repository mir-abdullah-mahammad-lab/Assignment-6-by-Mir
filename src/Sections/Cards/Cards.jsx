import React from 'react';
import writing from '../../assets/products/writing.png'

const Cards = ({cardData}) => {
    return (
        <div>
            
            <div className="card h-auto w-auto min-w-96 bg-base-100 shadow-sm ">
  <div className="card-body">
    <div className='flex justify-end'><button className='btn btn-xs btn-warning'>{cardData.tag}</button></div>
    <div>
      <img src={cardData.imageIcon} alt="hello" />
    </div>
    <div>
      <h1 className='text-2xl font-bold'>{cardData.name}</h1>
    </div>
    <div>
      <p>{cardData.description}</p>
    </div>
    <div>
      <h1 className='text-3xl'> ${cardData.price}/{cardData.period}</h1>
    </div>
   
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">

        {cardData.features.map( f => {return <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{f}</span>
      </li>})}  
      </ul>

    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;