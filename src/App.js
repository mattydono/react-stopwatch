import React, {useCallback, useState} from 'react';
import {DisplayTime, DisplaySwap, InputButtons, DisplayData, DisplayClock} from './components'
import './App.css';

function App() {

  const [time, setTime] = useState(0)
  const [laps, setLaps] = useState([])
  const [lapsDiff, setLapsDiff] = useState([])
  const [isRunning, setIsRunning] = useState(false)  
  const [display, setDisplay] = useState(0)
  const [lapTime, setLapTime] = useState(0)

  const formatTime = useCallback((timeToFormat) => {
    const minutes = Math.floor(timeToFormat / 6000)
    const seconds = Math.floor((timeToFormat % 6000) / 100)
    const milliseconds = ((timeToFormat % 60000) % 100)
    const currentTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + (milliseconds < 10 ? '0' : '') + milliseconds

    return currentTime
  }, [])

  return (
    <div className="App">
      {display === 0 ? <DisplayTime time={time} isRunning={isRunning} setTime={setTime} formatTime={formatTime} setLapTime={setLapTime}/> : <DisplayClock /> }
      <DisplaySwap display={display} setDisplay={setDisplay}/>
      <InputButtons isRunning={isRunning} setIsRunning={setIsRunning} laps={laps} time={time} setLaps={setLaps} setTime={setTime} lapsDiff={lapsDiff} setLapsDiff={setLapsDiff} setLapTime={setLapTime}/>
      <DisplayData laps={laps} lapsDiff={lapsDiff} formatTime={formatTime} time={time} lapTime={lapTime} setLapTime={setLapTime}/>
    </div>
  );
}

export default App;