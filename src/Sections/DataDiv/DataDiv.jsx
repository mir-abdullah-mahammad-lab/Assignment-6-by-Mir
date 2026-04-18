import React, { use } from 'react';
import Cards from '../Cards/Cards';

const DataDiv = ({toolsData}) => {
    console.log(toolsData)
    const useToolsData = use (toolsData)
    console.log(useToolsData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            {useToolsData.map(cardData =>{return <Cards key={cardData.id} cardData={cardData}></Cards>})}
            
        </div>
    );
};

export default DataDiv;