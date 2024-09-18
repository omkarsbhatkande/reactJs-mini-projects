import styled from "styled-components"

const NumberSelector = () => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {
        arrayNum.map((num,i ) => (<Box key={i}>{num}</Box>))
}
    </div>
  )
}

export default NumberSelector


const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display:grid;
place-items: center;
font-size:24px
font-weight: 700;
`;
