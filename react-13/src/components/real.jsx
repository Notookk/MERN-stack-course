import React, { useState , useEffect} from 'react'
import './real.css'

function Real() {
    const [totalTime, setTotalTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTotalTime(prevTime => prevTime + 1)
            }, 100)
        }
        
        return () => clearInterval(timer)
    }, [isRunning])

    const count = Math.floor(totalTime / 60)
    const miliseconds = totalTime % 60

    const startTimer = () => {
        setIsRunning(true)
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const resetTimer = () => {
        setTotalTime(0)
        setIsRunning(false)
    }

  return (
    <div id='container'>
        <h3>Timer : {count} : {miliseconds}</h3>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Real