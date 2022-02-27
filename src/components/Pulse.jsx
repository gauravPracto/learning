import React, { useMemo } from 'react'
import { useEffect } from 'react'
const Pulse = (props) => {
    console.log('kiii')
    const keyPress = (event)=>{
        if(event.key==="1" && props.start===0){
            // props.setPulse((prev)=>{
            //     return prev+1
            // })
            console.log('kiii')
        }
    }
    useEffect(() => {
        window.addEventListener("keypress",()=>{keyPress(window.event)})
    },[]);
  return (
    <div className='timer'>{props.pulse}</div>
  )
}

export default Pulse