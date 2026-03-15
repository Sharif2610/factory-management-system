import { useState } from 'react'
import First from './components/First'
import Second from './components/Second'
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import './App.css'
function App() {
  return (
    <div className='app'>
      <Header/>
      <SideBar/>
      <MainPage/>
      <Footer/>
    </div>
  )
}
export default App