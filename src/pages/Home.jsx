import React from 'react'
import ProductContainer from '../components/container/ProductContainer'
import Navbar from '../components/navbar/Navbar'
import Footer from '../../src/components/footer/Footer'
import '../../src/pages/Home.css'

const Home = () => {
  return (
    <div>
    <Navbar />
    <ProductContainer />
    <Footer />
    </div>
  )
}

export default Home