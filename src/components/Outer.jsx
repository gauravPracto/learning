import React from "react"
import Timer from "./Timer";
import Button from "./Button";
import {useState} from "react";
import Pulse from "./Pulse";
import Disclamer from "./Disclamer"
const Outer = () => {
    const [curr, setCurr] = useState(0);
    const [looper, setLooper] = useState(undefined)
    const [pulse, setPulse] = useState(0)
    const [start, setStart] = useState(0)
    if(curr==60){
        window.clearInterval(looper)
    }
    const counter = (check) => {
        let i = 0
        console.log(check, looper)
        if (check === 0) {
            clearInterval(looper)
            setCurr(0)
        } else {
            setLooper(setInterval(() => { // setCurr((prev,curr)=>prev+1)
                console.log(looper)
                setCurr(++ i)
            }, 1000))
        }

    }
    return <div>
        <Disclamer></Disclamer>
        <div id="outer">

            <Timer curr={curr}></Timer>
            <Pulse start={start}
                pulse={pulse}
                setPulse={setPulse}></Pulse>
            <Button start={start}
                setStart={setStart}
                counter={counter}
                setPulse={setPulse}></Button>
        </div>
    </div>
}

export default Outer;
