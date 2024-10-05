import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h2>{score}</h2>
      <p>Your Score</p>
    </ScoreContainer>
  )
}

export default TotalScore


const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;

h2{
  font-size: 100px;
  line-height: 100px;
  margin: 0;
}

  p{
  font-size: 24px;
  font-weight: 500px;
  }
`;
