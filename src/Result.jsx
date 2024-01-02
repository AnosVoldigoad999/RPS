import React from 'react'
import { useState, useEffect } from 'react'
function Result({chosen, setOgLoading, setScore, score}) {
    const icon = ()=>{
        if(chosen==='scissors'){
            return '/images/icon-scissors.svg'
        } else if(chosen==='paper'){
            return '/images/icon-paper.svg'
        } else{
            return '/images/icon-rock.svg'
        }
    }
    const [showModal, setShowModal] = useState(false) 
    const [won, setWon] = useState(false)
    const[comp, setComp] = useState('')
    function handleResults(){
      const num = Math.floor(Math.random()*3)
      //rock
      if(num===1 && chosen==="rock"){
        setWon('draw')
        setComp('rock')
        setScore(score)
      }else if(num===1 && chosen==="paper"){
        setWon(true)
        setComp('rock')
        setScore(score+1)
      }else if(num===1 && chosen==="scissors"){
        setComp('rock')
        setWon(false)
        if(score>0){
          setScore(score-1)
        }
      }
      //paper
      else if(num===2 && chosen==="rock"){
        setComp('paper')
        setWon(false)
        if(score>0){
          setScore(score-1)
        }
      }else if(num===2 && chosen==="paper"){
        setWon('draw')
        setComp('paper')
        setScore(score)
      }else if(num===2 && chosen==="scissors"){
        setWon(true)
        setComp('paper')
        setScore(score+1)
      }
      //scissors
      else if(num===3 && chosen==="rock"){
        setWon(true)
        setComp('scissors')
        setScore(score+1)
      }else if(num===3 && chosen==="paper"){
        setComp('scissors')
        setWon(false)
        if(score>0){
          setScore(score-1)
        }
      }else if(num===3 && chosen==="scissors"){
        setWon('draw')
        setComp('scissors')
        setScore(score)
      }

      /*extra, for bug <fixes></fixes>*/
      else if(num===0 && chosen==="rock"){
        setWon('draw')
        setComp('rock')
        setScore(score)
      }else if(num===0 && chosen==="paper"){
        setWon(true)
        setComp('rock')
        setScore(score+1)
      }else if(num===0 && chosen==="scissors"){
        setComp('rock')
        setWon(false)
        if(score>0){
          setScore(score-1)
        }
      }
    }

    useEffect(()=>{
  
      handleResults()
    }, [])

  return (
    <>
    {showModal && <div className="modal" onClick={(e)=>{
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
      <div className="resultMobile" /*style={{justifyContent:`${isLoading?'space-around':''}`}}*/>
        <div className="resultTop">
        <div className="first">
            <span>YOU PICKED</span>
            <img src={icon()}  alt="chosen" className={chosen}/>
        </div>
        <div className="third">
            <span>THE HOUSE PICKED</span>
           <img src={comp==='rock'?"/images/icon-rock.svg":comp==='paper'?"/images/icon-paper.svg":comp==='scissors'?"/images/icon-scissors.svg":''} alt="chosen" className={comp} />
            {/*<div className='load' />*/}
        </div>
        </div>
        <div className="second">
            <h2>{won===true?"YOU WIN":won==='draw'?"DRAW!":"YOU LOSE"}</h2>
            <button style={{color:`${!won?'hsl(349, 71%, 52%)':''}`}} onClick={()=>{setOgLoading(false)}}>PLAY AGAIN</button>
        </div>
      </div>
      <div className="result">
      <div className="first">
            <span>YOU PICKED</span>
            <img  src={icon()}  alt="chosen" className={chosen==='rock'?'rock':chosen==='paper'?'paper':'scissors'}/>
        </div>
         <div className="second">
            <h2>{won===true?"YOU WIN":won==='draw'?"DRAW!":won===false?"YOU LOSE":'idek'}</h2>
            <button style={{color:`${!won?'hsl(349, 71%, 52%)':''}`}} onClick={()=>{setOgLoading(false)}}>PLAY AGAIN</button>
        </div>
        <div className="third">
            <span>THE HOUSE PICKED</span>
           <img src={comp==='rock'?"/images/icon-rock.svg":comp==='paper'?"/images/icon-paper.svg":comp==='scissors'?"/images/icon-scissors.svg":''} alt="chosen" className={comp} />
            {/*<div className='load' />*/}
        </div>
      </div>
    </div>
 </div>
    <footer>
      <button onClick={()=>{setShowModal(true)}}>RULES</button>
    </footer>
    </>
  )
}

export default Result