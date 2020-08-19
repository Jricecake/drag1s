import React from 'react'

const Roll = (props) => {

  const determineDisplay = () => {
    // If a modifier is applied, show the math involved
    if (props.modifier !== null){

      // crit fails are red
      if (props.roll === 1 && props.sides === 20){
      return <div style={{color:'red'}}>(1d{props.sides}) - {props.roll} + {parseInt(props.modifier)} = {(props.roll + parseInt(props.modifier))}</div>
      }
      // crit hits are green
      if (props.roll === 20 && props.sides === 20){
        return <div style={{color:'green'}}>(1d{props.sides}) - {props.roll} + {props.modifier} = {(props.roll + parseInt(props.modifier))}</div>
      } 
      // regular rolls are white
      else {
        return <div>(1d{props.sides}) - {props.roll} + {props.modifier} = {(props.roll + parseInt(props.modifier))}</div>
      }

      // else if no modifier, just display dice roll
    } else {
      // crit fails are red
      if (props.roll === 1 && props.sides === 20){
      return <div style={{color:'red'}}>(1d{props.sides}) - {props.roll}</div>
        }
        // crit hits are green
        if (props.roll === 20 && props.sides === 20){
          return <div style={{color:'green'}}>(1d{props.sides}) - {props.roll}</div>
        } 
        // regular rolls are white
        else {
          return <div>(1d{props.sides}) - {props.roll}</div>
        }
    }
  }
  

  return (
    <>
      {determineDisplay()}
    </>
  );
}

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