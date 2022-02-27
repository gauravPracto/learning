import React from "react"
import Timer from "./Timer";
import Button from "./Button";
import { useState } from "react";
import Pulse from "./Pulse";
const Outer = ()=>{
    const [curr , setCurr ]  = useState(0);
    const [looper,setLooper] = useState(undefined)
    const [pulse,setPulse] = useState(0)
    const [start,setStart] = useState(0)
    const counter = (check)=>{
        let i=0
        console.log(check,looper)
        if(check===0){
            clearInterval(looper)
            setCurr(0)
        }
        else{
             setLooper(setInterval(()=>{
                // setCurr((prev,curr)=>prev+1)
                setCurr(++i)
                if(i==60)
                {clearInterval(looper)}
                
            },1000))
        }
    }
    return <>
     <div id="outer">
        <Timer curr={curr}></Timer>
        <Pulse start={start} pulse={pulse} setPulse={setPulse}></Pulse>
        <Button start={start} setStart={setStart} counter={counter} ></Button>
     </div>
    </>
}

export default Outer;

