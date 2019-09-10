import React, {useCallback} from 'react'
import './buttons.css'
import {lapTimes} from '../../App'

export const InputButtons: React.FC<{isRunning: boolean, setIsRunning: (boolean: boolean) => void, laps: number[], setLaps: (array: number[]) => void, time: number, setTime: (number: number) => void, setLapsDiff: (lapTimes:{}) => void, lapsDiff: lapTimes, setLapTime: (number: number) => void}> = ({isRunning, setIsRunning, laps, setLaps, time, setTime, setLapsDiff, lapsDiff, setLapTime}) => {

  const toggleIsRunning = useCallback(() => {
    !isRunning ? setIsRunning(true) : setIsRunning(false)
  }, [isRunning, setIsRunning])

  const toggleLapReset = useCallback(() => {
    if(isRunning) {
      setLaps([...laps, time])
      setLapsDiff({...lapsDiff, [laps.length + 1]: laps.length < 1 ?  time : time - laps[laps.length - 1]})
      setLapTime(0)
    } else {
      setIsRunning(false)
      setTime(0)
      setLaps([])
      setLapsDiff({})
      setLapTime(0)
    }
  }, [time, laps, setTime, setLaps, isRunning, setIsRunning, lapsDiff, setLapsDiff, setLapTime])

    return (
      <div className='buttonContainer'>
        <button className='button' onClick={toggleLapReset}>{isRunning ? 'Lap' : 'Reset'}</button>
        <button className='button' onClick={toggleIsRunning}>{isRunning ? 'Stop' : 'Start'}</button>
      </div>
    );
  }