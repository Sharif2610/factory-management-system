import { useState } from 'react';
import '../css/Increment.css';
function Increment(){
    let [n,setN] = useState(0);
    let increment = ()=>{
        setN(n+1);
        console.log(n);
    }
    let decrement = ()=>{
        setN(n-1);
        console.log(n);
    }
    return (
        <div className="increment">
            <button onClick={increment}>+</button><br /><br />
            <p>{n}</p><br />
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default Increment;