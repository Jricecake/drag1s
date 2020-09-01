import React, { useState } from "react";
import Roll from "./Roll";

const Roller = () => {
  const [rolls, setRolls] = useState([]);
  const [diceAmount, setDiceAmount] = useState(1);
  const [modifier, setModifier] = useState(0);

  // Rolls stored as objects with roll value and modifier value, if present
  const rollCalc = (sides) => {
    return parseInt(1 + Math.floor(Math.random() * sides));
  };
  const rollDice = (sides) => {
    // let stringBlock = diceAmount + "d" + sides + ": ";
    let rollsArr = [];
    for (let i = 0; i < diceAmount; i++) {
      rollsArr.push(rollCalc(sides));
    //   i == diceAmount - 1
    //     ? (stringBlock += rolls[i])
    //     : (stringBlock += rolls[i] + " + ");
    }
    console.log(rollsArr)
    setRolls([
      {
        key: rolls.length + 1,
        sides: sides,
        rolls: [...rollsArr],
        amount: parseInt(diceAmount),
        modifier: parseInt(modifier),
      },
      ...rolls,
    ]);
    setModifier(0);
  };

  // if # of dice is greater than 1, loop through number of dice
  // let (i = 0; i < diceAmount; i++){
  // setRolls([
  //   {
  //     key: rolls.length + 1,
  //     sides: sides,
  //     roll: 1 + Math.floor(Math.random() * sides + modifier),
  //     modifier: modifier,
  //   },
  //   ...rolls,
  // ])
  // }
  // diceAmount > 0
  //   ? setRolls([
  //     {
  //       key: rolls.length + 1,
  //       sides: sides,
  //       roll: []
  //     }
  //   ])

  // const handleSidesChange = (event) => {
  //   setSides(event.target.value)
  // }
  return (
    <div>
      <label>Dice Number:</label>
      <input
        type="number"
        value={diceAmount}
        onChange={(e) => setDiceAmount(e.target.value)}
      />
      <button onClick={(e) => rollDice(4)}>d4</button>
      <button onClick={() => rollDice(6)}>d6</button>
      <button onClick={() => rollDice(8)}>d8</button>
      <button onClick={() => rollDice(10)}>d10</button>
      <button onClick={() => rollDice(12)}>d12</button>
      <button onClick={() => rollDice(20)}>d20</button>
      <br></br>
      <label>Modifier:</label>
      <button onClick={() => setRolls([])}>Clear Rolls</button>
      <input
        type="number"
        value={modifier}
        onChange={(e) => setModifier(e.target.value)}
      />
      <div style={styles.scrollbox}>
        <div>
          {rolls.map((roll) => {
            return (
              <Roll
                key={roll.key}
                rolls={roll.rolls}
                amount={roll.amount}
                modifier={roll.modifier}
                sides={roll.sides}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  scrollbox: {
    display: "flex",
    overflow: "scroll",
    margin: "auto",
    justifyContent: "center",
    border: "black 1px solid",
    width: "200px",
  },
};

export default Roller;
