

const Lists = (currElem) => {
  const {id,img_url,name,rating,description,genre,cast,watch_url} = currElem;
  return (
    <div>
        
        <li key={id}>
       <div>
        <img src={img_url} alt="" width="40%" height="40%" />
      </div>
      <h2>Name   :  {name}</h2>
      <h3>Rating : {rating} </h3>
      <p>Summary : {description}  </p>
      <p>genre   : {genre}   </p>
      <p>Cast    : {cast}   </p>
      <a href={watch_url}  target="_blank">
      <button>Watch Now</button>
      </a>
      

      </li>
        
    </div>
  )
}

export default Lists
