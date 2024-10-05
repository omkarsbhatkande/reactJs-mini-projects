import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice Game</h2>
      <p>Select any Number</p>
      <p>after click on roll dice if selected number is equal to dice number you will get same point as dice{""}</p>
      <p>if selected number is not equal to dice number you will lose 2 points</p>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`

background-color: #fbf1f1;
padding: 20px;

h2{
font-size: 24px;
font-weight: 700;

}

.text{
margin-top:24px;
}


`;
