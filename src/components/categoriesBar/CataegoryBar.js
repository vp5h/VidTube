import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_cataegoryBar.scss'

const keywords = [
   'Trending',
   'ReactJS',
   'Angular',
   'React Native',
   'Next JS',
   'Vue JS',
   'Gatsby',
   'NodeJS',
   'Redux',
   'Google',
   'Prateek kuhad',
   'Twin Strings',
   'Ankur Tewari',
   'The Local Train',
   'Cricket',
]



const CataegoryBar = () => {
   const [activeElement, setActiveElement] = useState('Trending')

   const dispatch = useDispatch()
   const handleClick = value => {
      setActiveElement(value)
      if (value === 'Trending') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(value))
      }
   }

  return (
     <div className='categoriesBar'>
        {keywords.map((value, i) => (
           <span
              onClick={() => handleClick(value)}
              key={i}
              className={activeElement === value ? 'active' : ''}>
              {value}
           </span>
        ))}
     </div>
  )
};

export default CataegoryBar;
