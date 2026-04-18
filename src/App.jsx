// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Navbar from './Sections/Navbar/Navbar'
import Premium from './Sections/Premium/Premium'
import DataDiv from './Sections/DataDiv/DataDiv'

const dataFetched = async()=>{
    const data = await fetch('/data.json').then(d => d.json())
    return data
    
  }


function App() {
  // const [count, setCount] = useState(0)
  const toolsData = dataFetched()
  console.log(toolsData)
  

  return (
    <div>
       <Navbar></Navbar>
       <Premium></Premium>
       <Suspense fallback={'dataLoading'}>
          <DataDiv toolsData={toolsData}></DataDiv>
       </Suspense>
    </div>
   
  )
}

export default App
