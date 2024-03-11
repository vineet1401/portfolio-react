import React from 'react'
import "./pstyle.css"
import PList from "./PList.jsx"

const Project = () => {
  return (
    <>
      <h1 className='head'>MY WORK</h1>
      <span className="shadow-3"></span>
      <div className='projects'>
      <PList/>
      </div>
    </>
  )
}

export default Project
