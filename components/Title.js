import React from 'react';
import './Title.css'

const Title = ({title, subtitle}) => {
  return (
    <div className='title-block'>
        <h1 className='title'>Fintech {title}</h1>
        <div>
            <h2 className='subtitle'>Dates of events</h2>
        </div>
    </div>
  )
}

export default Title