import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SerachResult from './components/SearchResults/SerachResult';


export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      setError(null); // Clear previous error if any
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError('Unable to fetch food data');
      } finally {
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  // console.log(data);

const searchFood=(e)=>{
  const query=e.target.value;

  if(query == ""){
      setFilteredData(null);
  }

  const filteredData = data?.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()));
  setFilteredData(filteredData);
}

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  
 

  return (
    <>
    <Container>
        <TopContainer>
          <div className='logo'>
            <img src="../public/logo.png" alt="logo" />
          </div>

          <div className='search'>
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button>All</Button>
          <Button>Break Fast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>


        

        

    </Container>
    <SerachResult data = {filteredData} />
    </>
  )
}

export default App


export const Container = styled.main`

max-width: 1180px;
margin: 0 auto;

`;


const TopContainer = styled.div`

min-height: 140px;
display: flex;
justify-content: space-between;
padding:16px;
align-items: center;


.search{
input{

background-color:transparent;
border: 1px solid red;
height: 40px;
color:white;
border-radius: 5px;
font-size: 16px;
padding: 0 16px;
}
}
`;

const FilterContainer = styled.div`
display: flex;
justify-content: center;
gap: 16px;
color: white;
padding-bottom: 16px;
`;

 export const Button = styled.button`

background-color: #ff4343;
border-radius: 5px;
padding: 6px 12px;
border: none;

`;


