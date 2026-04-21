import React, { use } from 'react';
import Cards from '../Cards/Cards';

const DataDiv = ({toolsData}) => {
    console.log(toolsData)
    const useToolsData = use (toolsData)
    console.log(useToolsData)
    return (
        <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg: grid-col-3 gap-2'>
            {useToolsData.map(cardData =>{return <Cards key={cardData.id} cardData={cardData}></Cards>})}
            
        </div>
    );
};

export default DataDiv;