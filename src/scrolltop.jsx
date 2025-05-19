import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";


const scrolltop = () => {
  return (
    <>
    <div className='scrolltop'>
        <button onClick={ScrollToTop} id='scrollTop' style={{ display: visible ? "inline" : "none" }}>
        <FaArrowCircleUp />
        </button>
    </div>
    
    </>
  )
}

export default scrolltop