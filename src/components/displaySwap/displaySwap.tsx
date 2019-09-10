import React from 'react'
import './swap.css'

export const DisplaySwap: React.FC<{display: number, setDisplay: (number: number) => void}> = ({display, setDisplay}) => {
    return (
      <div className='swapButtonContainer'>
        <button className={display === 0 ? 'swapButtonSelected' : 'swapButtonDeselected'} onClick={() => setDisplay(0)}/>
        <button className={display === 1 ? 'swapButtonSelected' : 'swapButtonDeselected'} onClick={() => setDisplay(1)}/>
      </div>
    );
  }