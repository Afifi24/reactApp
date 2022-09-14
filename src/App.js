import React from "react";
import { useEffect, useState } from "react";
import Movie from "./movie";
import Footer from "./footer";
import Header from "./Header";
import Filter from "./filter";
// import Connexion from "./connexion";
import {motion } from 'framer-motion'
export default function App(){

  const[popular, setPopular]= useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)
  
  useEffect(()=>{
    fetchPOopular()
  },[])

  
  const fetchPOopular = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13aa08f7158e98f3eaf67a36b6c14e0a&language=en-US&page=1')
    const movie = await data.json()
    setPopular(movie.results)
    setFiltered(movie.results)
  }
  
    const movieapp =  filtered.map(popul=>{
      return(
      <Movie title={popul.title} backdrop_path={popul.backdrop_path} key={popul.id} overview ={popul.overview} />
      )
    })

  return(
    <>
    <Header />
    <Filter  popular={popular} setFiltered = {setFiltered}  activeGenre={activeGenre} setActiveGenre ={setActiveGenre}/>
    <motion.div layout
    
    className="hero">
    <div  className="App">
    <animatePresence>
     {movieapp}
     </animatePresence>
    </div>
     <Footer/>
     </motion.div>
     </>
  )
}