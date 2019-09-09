import React, {useCallback} from 'react'
import './data.css'

export function DisplayData({lapsDiff, formatTime}) {

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

    return (
      <div className='lapsContainer'>
        {lapsDiff.map(([key, lap]) => {
          return <div className={minMaxHighlight(lap)} key={key}>Lap {key} {formatTime(lap)}</div>
        })}
      </div>
    );
  }