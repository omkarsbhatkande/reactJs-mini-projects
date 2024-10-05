import styled from "styled-components"
import { useState } from "react";

const NumberSelector = (
  {selectedNum, setSelectedNum}
) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  

  
  



  return (
    <NumberSelectorContainer >
      <div className="flex">
      {
        arrayNum.map((num,i ) => (<Box
          isSelected={num === selectedNum}
          key={i}
        onClick={() => setSelectedNum(num)}
        >{num}</Box>))
}

      </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
display :flex;
gap: 24px;
}
p{
font-size: 24px;
font-weight: 700;}
`;


const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display:grid;
place-items: center;
font-size:24px
font-weight: 700;
background: ${props => props.isSelected ? "black" : "white"};
color: ${props => props.isSelected ? "white" : "black"};
`;
