import React from 'react'
import {motion} from 'framer-motion'

export default function Movie(props){
    return(
        <motion.div layout 
        animate ={{opacity: 1}}
         exit ={{opacity:1}}
          initial ={{opacity:0}}
        className="movie">
           <h1 className='title'>{props.title}</h1>
           <div className="overview-image">
           <img className='image' src=  {'https://image.tmdb.org/t/p/w300' + props.backdrop_path} alt="" />
           <div className="overview"> 
           <h4>Overview</h4>
           <p>{props.overview}</p>
           
           </div>
          </div>
        </motion.div>
    )
}