import React from 'react'
import "./pstyle.css"
import PList from "./PList.jsx"

const Project = () => {
  return (
    <>
      <h1 className='head'>MY WORK</h1>
      <span className="shadow-3"></span>
      <div className='projects ' data-aos="zoom-out" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <PList/>
      </div>
    </>
  )
}

export default Project
