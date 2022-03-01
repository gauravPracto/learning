import React, { Component } from 'react'

class ChildComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current:10

    }
}
static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps",props,state)
    return 1;
}

componentDidUpdate(props,state,snapshot){
    console.log("componentDidUpdate",props,state)
}
getSnapshotBeforeUpdate(prevProp,prevState){
    console.log("getSnapshotBeforeUpdate")
    return {prevProp,prevState}
}

render(){
    return <>
        {this.state.current}
    </>
}
}

export default ChildComponent;