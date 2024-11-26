//import React from 'react'


const Pagination = ({handlePrevious,handleNext,page}) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">

      <div className="px-8 hover:cursor-pointer" onClick={handlePrevious}>
       <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className="font-bold">{page}</div>

      <div className="px-8 hover:cursor-pointer" onClick={handleNext}>
       <i className="fa-solid fa-arrow-right"></i>
      </div>


      
    </div>
  )
}

export default Pagination
