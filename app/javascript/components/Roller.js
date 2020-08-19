import React, {useState} from 'react'

const Roller = () => {
  const [rolls, setRolls] = useState([])
  const [modifier, setModifier] = useState(0)
  
  const rollDice = (sides) => {
    console.log(sides)
    setRolls([...rolls, 1 + Math.floor(Math.random() * sides)])
  }

  // const handleSidesChange = (event) => {
  //   setSides(event.target.value)
  // }

  const displayRolls = () => {
    return rolls.map(roll => {
      if (roll === 1){
      return <p style={{color:'red'}}>{roll} + {modifier} = {(roll + modifier)}</p>
      }
      if (roll === 20){
        return <p style={{color:'green'}}>{roll} + {modifier} = {(roll + modifier)}</p>
      } 
      else {
        return <p>{roll} + {modifier} = {(roll + modifier)}</p>
      }
    })
  }
  
  return(
    <div>
      <button onClick={() => rollDice(4)}>d4</button>
      <button onClick={() => rollDice(6)}>d6</button>
      <button onClick={() => rollDice(8)}>d8</button>
      <button onClick={() => rollDice(10)}>d10</button>
      <button onClick={() => rollDice(12)}>d12</button>
      <button onClick={() => rollDice(20)}>d20</button>
      <br></br>
      <input type='number' value={modifier} onChange={e => setModifier(e.target.value)}/>
      {displayRolls()}
    </div>
  )
}

export default Roller