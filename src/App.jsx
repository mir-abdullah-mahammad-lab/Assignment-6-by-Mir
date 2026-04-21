import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Navbar from './Sections/Navbar/Navbar'
import Premium from './Sections/Premium/Premium'
import DataDiv from './Sections/DataDiv/DataDiv'
import SecondSection from './Sections/SecondSection/SecondSection'
import ThirdSection from './Sections/ThirdSection/ThirdSection'
import FiveSection from './Sections/FiveSection/FiveSection'
import SevenSection from './Sections/SevenSection/SevenSection'
import Footer from './Sections/Footer/Footer'
import CartListView from './Sections/CartListView/CartListView'


const dataFetched = async()=>{
    const data = await fetch('/data.json').then(d => d.json())
    return data
    
  }


function App() {
  const [productCart, setProductCart] = useState('product')
  const [productCount, setProductCount] = useState(0)
  const[proBtn, setProBtn] = useState('ProBtn')
  const[cartListItem, setCartListItem] = useState([])
  const [price, setPrice]= useState(0)
  
  const toolsData = dataFetched()
  // console.log(toolsData)
  

  return (
    <div>
       <Navbar></Navbar>
       <SecondSection></SecondSection>
       <ThirdSection></ThirdSection>
       <Premium productCart={productCart} setProductCart={setProductCart}
       productCount={productCount} proBtn={proBtn} setProBtn={setProBtn}></Premium>
          
       <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
          {proBtn ==='ProBtn'? <DataDiv toolsData={toolsData} productCount={productCount} setProductCount={setProductCount} setCartListItem={setCartListItem} cartListItem={cartListItem} price={price} setPrice={setPrice}></DataDiv> : <CartListView cartListItem={cartListItem} price={price}></CartListView>}
       </Suspense>

       <FiveSection></FiveSection>
       
       <SevenSection></SevenSection>
       <Footer></Footer>
    </div>
   
  )
}

export default App
