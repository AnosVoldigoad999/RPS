import React from 'react'
import { useState } from 'react'
function Ref() {
  const [score, setScore] = useState(0)
  function handleGame(chosen){
    const comp = Math.floor(Math.random() * 3)
    //rock    
    if(chosen==="rock" && comp===1){
      alert('its a draw, computer chose rock')
    } else if(chosen==="rock" && comp===2){
      alert('you lose, computer chose paper')
      if(score!=0){
        setScore(score-1)
      }
    }  else if(chosen==="rock" && comp===3){
      alert('you win, computer chose scissors')
        setScore(score+1)
    }
    //rock


      //paper 
    else  if(chosen==="paper" && comp===1){
        alert('you win, computer chose rock')
        setScore(score+1)
      } else if(chosen==="paper" && comp===2){
        alert('its a draw, computer chose paper')
      }  else if(chosen==="paper" && comp===3){
        alert('you lose, computer chose scissors')
        if(score!=0){
          setScore(score-1)
        }
      }
      //paper


        //scissors 
    else if(chosen==="scissors" && comp===1){
      alert('you lose, computer chose rock')
      if(score!=0){
        setScore(score-1)
      }
    } else if(chosen==="scissors" && comp===2){
      alert('you win, computer chose paper')
      setScore(score+1)
    }  else if(chosen==="scissors" && comp===3){
      alert('its a draw, computer chose scissors')
    }
    //scissors
  }
  return (
    <div>
    score:{score}
<div className="buttons">
<button onClick={()=>{handleGame("rock")}}>rock</button>
<button onClick={()=>{handleGame("paper")}}>paper</button>
<button onClick={()=>{handleGame("scissors")}}>scissors</button>
</div>
    </div>
  )
}

export default Ref