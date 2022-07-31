import React from 'react'
import PageGridCard from './PageGridCard'
import data from './data'

const PageGrid = () => {
  const datas = data.map(item =>   
  <PageGridCard 
    key = {item.id}
    // item = {item}
    {...item}
  />)
  return (
    <div className='page-grid'>
      {datas}
    </div>
  )
}

export default PageGrid
