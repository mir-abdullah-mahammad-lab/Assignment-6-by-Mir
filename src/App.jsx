// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Navbar from './Sections/Navbar/Navbar'
import Premium from './Sections/Premium/Premium'
import DataDiv from './Sections/DataDiv/DataDiv'
import SecondSection from './Sections/SecondSection/SecondSection'
import ThirdSection from './Sections/ThirdSection/ThirdSection'
import FiveSection from './Sections/FiveSection/FiveSection'
import SixSection from './Sections/SixSection/SixSection'
import SevenSection from './Sections/SevenSection/SevenSection'
import Footer from './Sections/Footer/Footer'

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
       <SecondSection></SecondSection>
       <ThirdSection></ThirdSection>
       <Premium></Premium>
          
       <Suspense fallback={'dataLoading'}>
          <DataDiv toolsData={toolsData}></DataDiv>
       </Suspense>

       <FiveSection></FiveSection>
       <SixSection></SixSection>
       <SevenSection></SevenSection>
       <Footer></Footer>
    </div>
   
  )
}

export default App
