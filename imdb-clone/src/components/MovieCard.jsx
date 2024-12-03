//import React from 'react'

const MovieCard = ({url}) => {

  return (
    <div style={{backgroundImage:`url(https://cdn2.thecatapi.com/images/${url})`}} className="h-[40vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col items-end">

      <div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
        &#128525;
      </div>

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        name
      </div>
      
    </div>
  )
}

export default MovieCard
