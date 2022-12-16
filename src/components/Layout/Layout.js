import React from 'react'
import './Layout.css'
import logo from '../../logo.svg'
import Sidebar from '../sidebar/Sidebar'
import Home from '../home/Home'
const  Layout = () => {
  return (
    <div className='parent'>
        <header className='header'>
            <nav className='nav'>
                <img src={logo} className="react-logo" alt={"reactLogo"}/>
                <Sidebar/>
            </nav>
        </header>
        <div className='content'>
            <div className='head'>home</div>
            <Home/>
        </div>
    </div>
  )
}

export default  Layout