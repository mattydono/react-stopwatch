import React, {useCallback} from 'react'
import './data.css'

export function DisplayData({lapsDiff, formatTime, lapTime}) {

    const minMaxHighlight = useCallback((value) => {
      const min = Math.min.apply(Math, lapsDiff.map(lap => lap[1]))
      const max = Math.max.apply(Math, lapsDiff.map(lap => lap[1]))

        if(value === min && lapsDiff.length > 1) {
          return 'green'
        } else if (value === max && lapsDiff.length > 1) {
          return 'red'
        } else {
          return 'white'
        }
        
    }, [lapsDiff])

    const topRow = useCallback(() => {
  
      if(lapsDiff.length === 0) {
        return <div className='topRow'>Lap 1 {formatTime(lapTime)}</div>
      } else {
        return <div className='topRow'>Lap {lapsDiff.length + 1} {formatTime(lapTime)}</div>
      }
    }, [lapsDiff, formatTime, lapTime])

    // useEffect(() => {
    //   setLapTime(time)
    // }, [lapsDiff, setLapTime, time])

    return (
      <div className='lapsContainer'>
        {lapsDiff.map(([key, lap]) => {
          return <div className={minMaxHighlight(lap)} key={key}>Lap {key} {formatTime(lap)}</div>
        })}
        {topRow()}
      </div>
    );
  }