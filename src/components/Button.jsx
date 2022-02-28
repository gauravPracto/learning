import React from 'react'
class Button extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.start!==this.props.start){
            return true
        }
        else
        {
            return false
        }   
    }
    render(){
        console.log("ren",this.props)
    const {start,setStart,setPulse} = this.props
    const onStartClick = ()=>{
        if(!start){
            this.props.counter()
            setStart(1)
        }
        else{
            this.props.counter(0)
            setPulse(0)
            setStart(0)
        }
        console.log(start)
    }
  return (
    <button id="button" onClick={()=>{onStartClick()}}>{start===0?"start":"reset"}</button>
  )
    }
}

export default Button