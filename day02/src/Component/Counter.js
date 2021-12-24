import React, { useEffect, useState, useContext } from "react";
import {MyContext} from '../context/MyContext' ;
//Arrow funtion component
export const Counter=()=>{
    const [counter, setCounter]= useState(0);
    const {count, setCount}= useContext(MyContext);
    useEffect (()=>{
        console.log(`Counter is ${counter}`);

        //clear up function
        return ()=>{
            console.log(`Clean up`);
        };
    });//no dependcies
    useEffect (()=>{
        console.log(`In load page,Counter is ${counter}`);

        //clear up function
        return ()=>{
            console.log(`Clean up 2`);
        };
    }, [] );//dependcies, empty array: once time (load page)
    useEffect(()=>{
        console.log(`Call when change counter`);
        setCount(counter);
    }, [counter]);
    return (
        <>
            <h2>COUNTER: {counter}</h2>
            <h3>Count from MyContext: {count}</h3>
            <button onClick={()=> setCounter(counter+1)}>+</button>
            <button onClick={()=> setCounter(counter-1)}>-</button>

        </>
        )
};