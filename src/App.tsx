import React, {useState} from 'react';
import {DisplayTime, DisplaySwap, InputButtons, DisplayData, DisplayClock} from './components'
import './App.css';

export interface lapTimes {
  [lapTime: number]: number
}

const App: React.FC = () => {

  const [time, setTime] = useState<number>(0)
  const [laps, setLaps] = useState<number[]>([])
  const [lapsDiff, setLapsDiff] = useState<lapTimes>({})
  const [isRunning, setIsRunning] = useState<boolean>(false)  
  const [display, setDisplay] = useState<number>(0)
  const [lapTime, setLapTime] = useState<number>(0)

  const formatTime = (timeToFormat: number): string => {
    const minutes = Math.floor(timeToFormat / 6000)
    const seconds = Math.floor((timeToFormat % 6000) / 100)
    const milliseconds = ((timeToFormat % 60000) % 100)
    const currentTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + (milliseconds < 10 ? '0' : '') + milliseconds

    return currentTime
  }

  return (
    <div className="App">
      {display === 0 ? <DisplayTime time={time} isRunning={isRunning} setTime={setTime} formatTime={formatTime} setLapTime={setLapTime}/> : <DisplayClock /> }
      <DisplaySwap display={display} setDisplay={setDisplay} />
      <InputButtons isRunning={isRunning} setIsRunning={setIsRunning} laps={laps} time={time} setLaps={setLaps} setTime={setTime} lapsDiff={lapsDiff} setLapsDiff={setLapsDiff} setLapTime={setLapTime} />
      <DisplayData lapsDiff={lapsDiff} formatTime={formatTime} lapTime={lapTime} />
    </div>
  );
}

export default App;