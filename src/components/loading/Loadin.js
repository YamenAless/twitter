import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import { useState , useEffect } from 'react';
import './Loading.css'

function Loadin() {
  const [loading , setLoading ] = useState(false)
  var loadingg = "loading..."
useEffect(()=>{
  setLoading(true)
  loadingg = ""
  setTimeout(() => {
    setLoading(false)
  }, 8000);
},[loading])


  return (
    <div  className='loading'>

       loading...
      <BarLoader  
        color={"black"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
      </div>
  
  )
}

export default Loadin
