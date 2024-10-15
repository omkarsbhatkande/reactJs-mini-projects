import series from "../api/series.json"

const NetfliexSeries = () => {
  const movie = series.map((curELEM)={
    
  })
  return (
    <div>
       <div>
        <img src="../public/avatar.jpg" alt="" width="40%" height="40%" />
      </div>
      <h2>Name : </h2>
      <h3>Rating : </h3>
      <p>Summray :</p>
      <button></button>
    </div>
  )
}

export default NetfliexSeries
