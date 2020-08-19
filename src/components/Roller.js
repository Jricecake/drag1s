import React, { useState } from "react";
import Roll from "./Roll";

const Roller = () => {
  const [rolls, setRolls] = useState([]);
  const [diceAmount, setDiceAmount] = useState(1);
  const [modifier, setModifier] = useState(0);

  // Rolls stored as objects with roll value and modifier value, if present
  const rollDice = (sides) => {
    modifier !== 0
      ? setRolls([
          ...rolls,
          {
            key: rolls.length + 1,
            sides: sides,
            roll: 1 + Math.floor(Math.random() * sides + modifier),
            modifier: modifier,
          },
        ])
      : setRolls([
          ...rolls,
          {
            key: rolls.length + 1,
            sides: sides,
            roll: 1 + Math.floor(Math.random() * sides),
            modifier: null,
          },
        ]);
    setModifier(0);
  };

  const addModifier = (roll, modifier) => {
    return roll + modifier;
  };

  // const handleSidesChange = (event) => {
  //   setSides(event.target.value)
  // }
  return (
    <div>
      <label>Dice Number</label>
      <input type='number'
      value={diceAmount}
      onChange={(e) => setDiceAmount(e.target.value)}/>
      <button onClick={(e) => rollDice(4)}>d4</button>
      <button onClick={() => rollDice(6)}>d6</button>
      <button onClick={() => rollDice(8)}>d8</button>
      <button onClick={() => rollDice(10)}>d10</button>
      <button onClick={() => rollDice(12)}>d12</button>
      <button onClick={() => rollDice(20)}>d20</button>
      <br></br>
      <label>Modifier:</label><input
        type="number"
        value={modifier}
        onChange={(e) => setModifier(e.target.value)}
      />
      <button onClick={() => setRolls([])}>Clear Rolls</button>
      {rolls.map((roll) => {
        return (
          <Roll
            key={roll.key}
            roll={roll.roll}
            modifier={roll.modifier}
            sides={roll.sides}
          />
        );
      })}
    </div>
  );
};

export default Roller;
