import React from 'react'
import ChildComponent from './ChildComponent'

class Lifecycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {current:0}
    }
    componentDidMount(){
        console.log("component did mount")
        console.log("----------------------")
    }
    componentDidUpdate(){
        console.log("component did update")
        console.log("----------------------")
    }
    componentWillUnmount(){
        console.log("component did unmount")
        console.log("----------------------")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("component should mount")
        console.log("----------------------")
        if(nextState.current==this.state.current){
            return false
        }
        else{
            return true
        }
    }
    
    render(){
        return <h1>
            <ChildComponent parentState = {this.state.current}></ChildComponent>
            {this.state.current}
            <button onClick={()=>{this.setState({
                current:this.state.current+1
            })}}>change</button>
            <button onClick={()=>{this.setState({
                current:this.state.current
            })}}>unchange</button>
        </h1>
    }
}

export default Lifecycle;