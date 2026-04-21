import React, { use, useState } from 'react';
import Cards from '../Cards/Cards';


const DataDiv = ({toolsData, productCount, setProductCount, cartListItem,setCartListItem, price, setPrice}) => {
    // console.log(toolsData)
    const useToolsData = use (toolsData)
    // console.log(useToolsData)

    
    return (
         <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-3 gap-2'>
            {useToolsData.map(cardData =>{return <Cards key={cardData.id} cardData={cardData} 
            productCount={productCount} setProductCount={setProductCount} cartListItem={cartListItem} setCartListItem={setCartListItem} price={price} setPrice={setPrice}></Cards> })}
            
        </div> 
        
    );
};

export default DataDiv;