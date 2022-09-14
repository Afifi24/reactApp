import React, {useEffect} from 'react'


export default function Filter(props){
    useEffect(()=>{
      if(props.activeGenre === 0){
        props.setFiltered(props.popular)
        return;
      }
      const filtred = props.popular.filter((movie)=>
      movie.genre_ids.includes(props.activeGenre))

      props.setFiltered(filtred);
    },[props.activeGenre])
    return(
        <div className="filter">
            <button className ={props.activeGenre ===0 ? "active":""} onClick={()=>props.setActiveGenre(0)}>All</button>
            <button className={props.activeGenre === 35 ? "active":""} onClick={()=>props.setActiveGenre(35)}>Comedy</button>
            <button  className={props.activeGenre === 28 ? "active":""} onClick={()=>props.setActiveGenre(28)}>Action</button>
        </div>
    )
}
 