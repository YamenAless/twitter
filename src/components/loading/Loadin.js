import React from 'react'
import BarLoader from "react-spinners/BarLoader";

function Loadin() {
  return (
    <div>
      
      <BarLoader
        color={"black"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loadin
