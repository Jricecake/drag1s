import React, { useState } from "react";

const Roll = (props) => {
  const { amount, sides, modifier, rolls } = props;

  const addModifier = (roll, modifier) => {
    return roll + modifier;
  };

  const determineDisplay = () => {
    // const rolls = [];
    let stringBlock = amount + "d" + sides + ": ";

    // {
    //   if (rolls.length > 1) {
    //     for (let i = 0; i < rolls.length; i++) {
    //       i == rolls.length - 1
    //         ? (stringBlock += rolls[i])
    //         : (stringBlock += rolls[i] + " + ");
    //     }
    //   } else {
    //     stringBlock += rolls[0];
    //   }
    // }
    // return <>{rolls.length > 1 ? stringBlock = total : stringBlock}</>;

    // for (let i = 0; i < amount; i++) {
    //   rolls.push(rollCalc(sides));
    //   i == amount - 1
    //     ? (stringBlock += rolls[i])
    //     : (stringBlock += rolls[i] + " + ");
    // }
    // result :
    // <div> 4d20: (roll[0])12 + (roll[1])18 + (roll[2])20 + (roll[3]) = 54 </div>

    // console.log(rolls);
    // console.log(stringBlock);
    // setRollAmount(rolls)
    // // If a modifier is applied, show the math involved
    // if (props.modifier !== null) {
    //   // crit fails are red
    //   if (props.roll === 1 && props.sides === 20) {
    //     return (
    //       <li style={{ color: "red" }}>
    //         (1d{props.sides}): {props.roll} + {parseInt(props.modifier)} ={" "}
    //         {props.roll + parseInt(props.modifier)}
    //       </li>
    //     );
    //   }
    //   // crit hits are green
    //   if (props.roll === 20 && props.sides === 20) {
    //     return (
    //       <li style={{ color: "green" }}>
    //         (1d{props.sides}): {props.roll} + {props.modifier} ={" "}
    //         {props.roll + parseInt(props.modifier)}
    //       </li>
    //     );
    //   }
    //   // regular rolls are white
    //   else {
    //     return (
    //       <li>
    //         (1d{props.sides}): {props.roll} + {props.modifier} ={" "}
    //         {props.roll + parseInt(props.modifier)}
    //       </li>
    //     );
    //   }

    //   // else if no modifier, just display dice roll
    // } else {
    //   // crit fails are red
    //   if (props.roll === 1 && props.sides === 20) {
    //     return (
    //       <li style={{ color: "red" }}>
    //         (1d{props.sides}): {props.roll}
    //       </li>
    //     );
    //   }
    //   // crit hits are green
    //   if (props.roll === 20 && props.sides === 20) {
    //     return (
    //       <li style={{ color: "green" }}>
    //         (1d{props.sides}): {props.roll}
    //       </li>
    //     );
    //   }
    //   // regular rolls are white
    //   else {
    //     return (
    //       <li>
    //         (1d{props.sides}): {props.roll}
    //       </li>
    //     );
    //   }
    // }
  };
  const total = rolls.reduce((a, b) => a + b);
  return (
    <div>
      <div>
        {rolls.map((roll, i) => {
          // if this is the last roll, don't add a space
          if (i === rolls.length - 1) {
            if (roll === 20) {
              return <><span style={{ color: "green" }}>{roll}</span></>;
            } else if (roll === 1) {
              return <><span style={{ color: "red" }}>{roll}</span></>;
            } else {
              return roll;
            }
            // else add a space
          } else {
            if (roll == 20) {
              return <span style={{ color: "green" }}>{roll}</span> + " + ";
            } else if (roll == 1) {
              return <span style={{ color: "red" }}>{roll}</span> + " + ";
            } else {
              return roll + " + ";
            }
          }
        })} = {total}
      </div>
    </div>
  );
};

export default Roll;

// if (roll.modifier !== null){
//         if (roll.roll === 1){
//         return <p style={{color:'red'}}>{roll} + {parseInt(roll.modifier)} = {(roll.roll + roll.modifier)}</p>
//         }
//         if (roll.roll === 20){
//           return <p style={{color:'green'}}>{roll.roll} + {roll.modifier} = {(roll.roll + roll.modifier)}</p>
//         }
//         else {
//           return <p>{roll.roll} + {roll.modifier} = {(roll.roll + roll.modifier)}</p>
//         }
//       } else {
//         if (roll.roll === 1){
//           return <p style={{color:'red'}}>{roll}</p>
//           }
//           if (roll.roll === 20){
//             return <p style={{color:'green'}}>{roll.roll}</p>
//           }
//           else {
//             return <p>{roll.roll}</p>
//           }
//       }
