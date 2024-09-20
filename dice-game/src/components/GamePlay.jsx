import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from "styled-components"


const GamePlay = () => {
  return (

    <mainContainer>
      <div className="top_section">
      <TotalScore />
      <NumberSelector />
      </div>
    </mainContainer>
  );
}

export default GamePlay;

const mainContainer = styled.main`

.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
`;
