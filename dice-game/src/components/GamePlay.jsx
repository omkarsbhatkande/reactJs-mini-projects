import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
        selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>
      <RoleDice
        diceNumber={diceNumber} setDiceNumber={setDiceNumber} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top:17px;
padding-right:17px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;

