import React from 'react'
import CoverTexts from './CoverTexts'
import image from '../assets/Group-77.png'

const Cover = () => {
  return (
    <div className='cover-container'>
      <img className='cover-img' src={image} alt="cover img" />
      <CoverTexts />
    </div>
  )
}

export default Cover
