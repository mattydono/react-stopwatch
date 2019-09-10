import React, {useEffect, useCallback} from 'react'
import './time.css'

export const DisplayTime: React.FC<{time: number, setTime: (number: (number: number) => number) => void, isRunning: boolean, formatTime: (number: number) => string, setLapTime: (number: (number: number) => number) => void}> = ({time, setTime, isRunning, formatTime, setLapTime}) => {

  const tick = useCallback(() => {
    setTime(time => time + 1)
    setLapTime(time => time + 1)
  }, [setTime, setLapTime])

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(tick, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning, tick]);

    return (
      <div className='time'>
        {formatTime(time)}
      </div>
    );
  }