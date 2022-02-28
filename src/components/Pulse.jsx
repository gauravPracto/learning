import React, { useMemo } from 'react'
import { useEffect } from 'react'

class Pulse extends React.Component{
    constructor(props){
        super(props)
    }

    keyPress = (event)=>{
        console.log(event.key)
        if(event.key==="1" && this.props.start===1){
            this.props.setPulse((prev)=>{
                return prev+1
            })
            console.log('kiii')
        }
    }

    componentDidMount(){
            window.addEventListener("keypress",()=>{this.keyPress(window.event)})
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.start!=this.props.start || nextProps.pulse!=this.props.pulse){
            return true
        }
        else{
            return false
        }
    }
    render(){
        console.log('kiii')
  return (
    <div className='timer'>{this.props.pulse} Pulse</div>
  )
    }
}

export default Pulse