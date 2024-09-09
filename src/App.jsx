import { useState } from 'react'

import './App.css'
import Header from './Component/Header/header'
import Footer from './Component/Footer/Footer'
import Banner from './Component/Banner/banner'
import RowList from './Component/Row/Rowlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <RowList/>
     <Footer/>

    </>
  )
}

export default App
