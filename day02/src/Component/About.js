import React, { useContext } from "react";
import {MyContext} from '../context/MyContext';
export const About=()=>{
    const {count} = useContext(MyContext);
return(
    <>
    <h3>Count from MyContext :{count}</h3>
    <h2>Lê Nguyễn Như Hảo</h2>
    <h3>sđt: 0908758439</h3>
    </>

)
};


