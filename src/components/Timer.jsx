import React from 'react'
import { useState,useEffect } from 'react';
const Timer = (props) => {
  return (
    <div className="timer">
        {props.curr} sec
    </div>
  )
}

export default Timer