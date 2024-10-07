import styled from "styled-components";
import { BASE_URL , Button, Container } from "../../App";
const SerachResult = ({ data:foods }) => {
  return (
    <FoodCardContainer>
      <Container>
      <FoodCards>
          {foods?.map(({name, image, text,price}) => (
            <FoodCard key={name}>
              <div className="image">
                <img src={BASE_URL + image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>{"$" + price.toFixed(2)}</Button>
              </div>
            </FoodCard>
        ))}
      </FoodCards>
      </Container>
    </FoodCardContainer>
  )
}

export default SerachResult



const FoodCardContainer = styled.section`
background-image: url("../public/bg.jpeg");
background-repeat: no-repeat;
background-size: cover;
height: calc(100vh - 190px);
`;


const FoodCards = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
row-gap: 32px;
column-gap: 20px;
padding-top: 52px;

`;

const FoodCard = styled.div`

width: 340px;
height: 167px;
padding: 20px;

border:0.66px solid;

border-image-source: radial-gradient(
80.69% 208.78% at 108.28% 112.58%,
#eabfff 0%,
rgba(135,38,183,0) 100%

);

radial-gradient(
80.38% 222.5% at -13.32% -12.04%,
#98f9ff 0%,
rgba(255,255,255,0) 100%
)

box-sizing: border-box;



background: url(.png),
radial-gradient(
98.16% 143.01% at 15.32% 21.04%, 
rgba(165, 239, 255, 0.2) 8% ,
rgba(110, 191, 244, 8.844) 77.88%, 
rgba(78, 144, 213, 8) 100%);
background-blend-mode: overlay,normal;
backdrop-filter: blur(13.184pxpx);

border-radius: 20px;

display: flex;
padding: 10px;


.food_info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  h3{
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
  }
    p{
      font-size: 14px;
      margin-top: 10px;
    }
}


`;
