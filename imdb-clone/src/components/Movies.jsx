//import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Pagination from './Pagination';

const Movies = () => {

  const [movies , setMovies] =useState([]);
  const [page,setPage] = useState(1);

 

  const handlePrevious = ()=>{

    if(page == 1){
      setPage(page)
    }
    else{
      setPage(page-1);
    }
  }

  const handleNext = ()=>{
    setPage(page+1);
  }

  useEffect(()=>{
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_HTx8xa8XYDlyBH2Py8RtyKin7gBG90iqlWep5HmTWXPOTEwQU0vEoQIb8QIeDiAZ`).then(function(res){
      setMovies(res.data);  
    })
  },[])

  return (
    <div className="p-5">

      <div className="text-2xl m-5 font-bold text-center">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-6">
        {movies.map((moviesObj,id)=>{
          return <MovieCard url={moviesObj.url} key={id} />
        })}
      </div>

      <Pagination page={page} handlePrevious={handlePrevious} handleNext={handleNext} />



    </div>
  )
}

export default Movies


//http://www.omdbapi.com/?i=tt3896198&apikey=8e2742dc