import React, {useCallback} from 'react'
import './data.css'
import {lapTimes} from '../../App'

export const DisplayData: React.FC<{lapsDiff: lapTimes, formatTime: (number: number) => string, lapTime: number}> = ({lapsDiff, formatTime, lapTime}) => {

    const minMaxHighlight = useCallback((value: number): string => {
      const min: number = Math.min.apply(Math, Object.values(lapsDiff))
      const max: number = Math.max.apply(Math, Object.values(lapsDiff))

        if(value === min && Object.values(lapsDiff).length > 1) {
          return 'green'
        } else if (value === max && Object.values(lapsDiff).length > 1) {
          return 'red'
        } else {
          return 'white'
        }
        
    }, [lapsDiff])

    const topRow = useCallback(() => {
      if(Object.values(lapsDiff).length === 0) {
        return <div className='topRow'>Lap 1 {formatTime(lapTime)}</div>
      } else {
        return <div className='topRow'>Lap {Object.values(lapsDiff).length + 1} {formatTime(lapTime)}</div>
      }
    }, [lapsDiff, formatTime, lapTime])

    return (
      <div className='lapsContainer'>
        {Object.entries(lapsDiff).map(([key, lap]) => {
          return <div className={minMaxHighlight(lap)} key={key}>Lap {key} {formatTime(lap)}</div>
        })}
        {topRow()}
      </div>
    );
  }