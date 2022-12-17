import React from 'react'
import './Layout.css'
import logo from '../../logo.svg'
import Sidebar from '../sidebar/Sidebar'
const  Layout = (props) => {
  return (
    <div className='parent'>
        <header className='header'>
            <nav className='nav'>
                <img src={logo} className="react-logo" alt={"reactLogo"}/>
                <Sidebar/>
            </nav>
        </header>
        <div className='content'>
            <div className='head'>
              {props.title}
              </div>
            {props.children}
        </div>
    </div>
  )
}

export default  Layout