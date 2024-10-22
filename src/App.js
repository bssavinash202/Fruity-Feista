import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menus/Menu'
import Banners from './components/banners/Banners'
import Banners2 from './components/banners/Banners2'
import Banner3 from './components/banners/Banner3'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
     <Hero/>
     <Menu/>
     <Banners/>
     <Banners2/>
     <Banner3/>
     <Footer/>
    </main>
    </>
  )
}

export default App
