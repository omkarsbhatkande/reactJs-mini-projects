import styled from "styled-components";
import { useState } from "react";

const RollDice = (
  { diceNumber,setDiceNumber }
) => {
  

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    const number = generateNumber(1, 6);
    setDiceNumber(number);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dices/dice_${diceNumber}.png`} alt={`dice ${diceNumber}`} />
      </div>
      <p>Click on Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
