import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score , setScore] = useState(0)
  const [selectedNum, setSelectedNum] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [ error , setError] = useState("");
  const [ rule , setrule]= useState(false);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if(!selectedNum) {
      setError("Please Select A Number");
      return;
    }
    
    const number = generateNumber(1, 6);
    setDiceNumber((prev) => number); 

    

    if(selectedNum === number){
      setScore((prev) => prev + number);
    }else{
      setScore((prev) => prev - 2);
    }

    selectedNum (undefined);

  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
        selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      </div>
      <RoleDice
        diceNumber={diceNumber} rollDice={rollDice} />
        <div className="btns">
        <Button onClick={() => setScore(0)}>Reset</Button>
          <Button
          onClick={() => setrule((prev)=>!prev)}
          >{rule ? "Hide" : "Show" } Rule</Button>
           {rule && <Rules />}
          
        </div>
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

  .btns{
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`;

