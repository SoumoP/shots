import React, { useEffect, useState } from 'react'
import Photo from './photo'
import "./photo.css"

const PhotoList = () => {
  const [list, setList] = useState([
  ]);
  useEffect(()=>{
    setList([
      { 
        id:1,
        src:"https://images.pexels.com/photos/16440255/pexels-photo-16440255/free-photo-of-bridal-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        id:2,
        src:"https://images.pexels.com/photos/17327726/pexels-photo-17327726/free-photo-of-light-city-italian-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        id:3,
        src:"https://images.pexels.com/photos/17264883/pexels-photo-17264883/free-photo-of-silhouette-of-running-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      { 
        id:4,
        src:"https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ])
  }, [])
  
  return (
    <div className='gallery'>
      <div className='gallery-con'>
        {
          list.map((value)=>(
            <Photo id={value.id} src={value.src}/>
          ))
        }
      </div>
    </div>
  )
}

export default PhotoList