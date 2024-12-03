//import React from 'react'

const WatchList = () => {
  return (
    <>

    <div className="flex justify-center flex-wrap m-4">
      <div className="bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4">All</div>
      <div className="bg-gray-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4">Horror</div>
      <div className="bg-gray-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center">Action</div>
    </div>

      <div className="flex justify-center my-4">
        <input type="text" className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4" placeholder="Search for Movies" />
      </div>

      <div className="border rounded overflow-hidden border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bordeer-b-2">
              <td className="flex items-center px-6 py-4">
                <img className="h-3rem] w-[5rem]" src={`https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg`} />
                <div className="mx-8">Monster House</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Horror</td>


              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default WatchList
