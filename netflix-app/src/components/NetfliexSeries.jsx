import series from "../api/series.json"
import Lists from "./Lists"

const NetfliexSeries = () => {
  return (
    <>
    <ul>
      {series.map((currElem)=>{ 
        return  <Lists key={currElem.id} currElem={currElem} />
         })}
      </ul>
    </>
  )
}

export default NetfliexSeries
