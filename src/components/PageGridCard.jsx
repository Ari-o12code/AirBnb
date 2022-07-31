import React from 'react'
import star from '../assets/Star.png'

const PageGridCard = (props) => {
  let badgeText
  if (props.openSpots === 0){
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online'){
    badgeText = 'VIRTUAL'
  } else if (props.location === 'Norway'){
    badgeText = 'IN-PERSON'
  }
  return (
    <div className='pagegridcard-container'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img className='pagegridcard-img' 
      src={props.coverImg} 
      alt="sales img" />
      <div className='star'>
        <img src={star} alt="" />
        <span className='star-texts'>{props.stats.rating}</span>
        <span className='star-texts grey'>({props.stats.reviewCount})</span>
        <span className='star-texts grey'>- {props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default PageGridCard
