import React from 'react'

const Frames = ({emoji, heading, Desc}) => {
  return (
    <>
    <div className='frame'>
      <img src={emoji} alt="emoji" />
      <h1>{heading}</h1>
      <p>{Desc}</p>
    </div>
    </>
  )
}

export default Frames;
