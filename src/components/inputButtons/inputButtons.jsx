import React, {useCallback} from 'react'
import './buttons.css'

export function InputButtons({isRunning, setIsRunning, laps, setLaps, time, setTime, setLapsDiff, lapsDiff}) {

  const toggleIsRunning = useCallback(() => {
    !isRunning ? setIsRunning(true) : setIsRunning(false)
  }, [isRunning, setIsRunning])

  const toggleLapReset = useCallback(() => {
    if(isRunning) {
      setLaps([...laps, time])
      setLapsDiff([...lapsDiff, [laps.length + 1, laps.length < 1 ?  time : time - laps[laps.length - 1]]])
    } else {
      setIsRunning(false)
      setTime(0)
      setLaps([])
      setLapsDiff([])
    }
  }, [time, laps, setTime, setLaps, isRunning, setIsRunning, lapsDiff, setLapsDiff])

    return (
      <div className='buttonContainer'>
        <button className='button' onClick={toggleLapReset}>{isRunning ? 'Lap' : 'Reset'}</button>
        <button className='button' onClick={toggleIsRunning}>{isRunning ? 'Stop' : 'Start'}</button>
      </div>
    );
  }