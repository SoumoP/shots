import React from 'react'

const Photo = (props) => {
  console.log(props.src);
  return (
    <div className='image-con'>
      <img src={props.src} alt={props.id} className='image'/>
    </div>
  )
}

export default Photo