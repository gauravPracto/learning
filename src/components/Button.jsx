import React from 'react'
const Button = (props) => {
    console.log("ren")
    const {start,setStart} = props
    const onStartClick = ()=>{
        if(!start){
            props.counter()
            setStart(1)
        }
        else{
            props.counter(0)
            setStart(0)
        }
        console.log(start)
    }
  return (
    <button id="button" onClick={()=>{onStartClick()}}>{start===0?"start":"reset"}</button>
  )
}

export default Button