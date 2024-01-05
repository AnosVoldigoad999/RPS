import React from 'react'
import { useState, useEffect } from 'react'
import Result from './Result'
import './App.css'
function App() {

  const [score, setScore] = useState(()=>{
    const gottenScore = JSON.parse(localStorage.getItem('score'))
    if(!gottenScore){
      return 0
    }else{
      return gottenScore
    }
  })
  const [showModal, setShowModal] =useState(false) 
  const [chosen, setChosen] = useState('')
  const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
  localStorage.setItem('score', JSON.stringify(score))
}, [score])
  
  return (
<>
{!isLoading? <>{showModal && <div className="modal" onClick={(e)=>{
  if(e.target.classList.contains('modal')){
    setShowModal(false)
  }
}}>
<div className="modalContent">
<div className="modalTop">
    <h3>Rules</h3>
    <img src="/images/icon-close.svg" alt="close" onClick={()=>{setShowModal(false)}}/>
  </div>
  <img src="/images/image-rules.svg" alt="rules" className='rules' />
</div>
</div>}

<div className="Container">
<div className="container">
  <div className="top">
    <ul>
      <li>ROCK</li>
      <li>PAPER</li>
      <li>SCISSORS</li>
    </ul>
    <div className="score">
      <span>score</span>
      <h2>{score}</h2>
    </div>
  </div>
  <div className="bottom">
    <div className="icons">
      <div className="iconsTop">
        <img onClick={()=>{setIsLoading(true); setChosen('paper')}} src="/images/icon-paper.svg" alt="paper" className='paper'/>
      <img onClick={()=>{setIsLoading(true); setChosen('scissors')}} src="/images/icon-scissors.svg" alt="scissors" className='scissors' />
      </div>
      <div className="iconsBottom">
        <img onClick={()=>{setIsLoading(true); setChosen('rock')}} src="/images/icon-rock.svg" alt="rock" className='rock'/>
      </div>
    </div>
  </div>
</div>
</div>
<footer>
  <button onClick={()=>{setShowModal(true)}}>RULES</button>
</footer></>:
<Result chosen={chosen} setOgLoading={setIsLoading} setScore={setScore} score={score}/>}
</>
  )
}

export default App