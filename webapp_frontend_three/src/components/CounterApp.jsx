/*import '../css/CounterApp.css';
import { useState,useRef } from 'react';
function CounterApp(){
    let [n,setN] = useState(0);
    let inputRef = useRef();
    let data = '';
    let increment = ()=>{
        setN(n + 1)
        console.log(n)
    }
    let decrement = ()=>{
        setN(n - 1)
        console.log(n)
    }
    let readdata = ()=>{
        data = inputRef.current.value
        console.log(data)
    }
    let cleardata = ()=>{
        inputRef.current.value = '';
    }
    return (
        <div className="counterapp">
            <button onClick={increment}>+</button><br />
            {n} <br />
            <button onClick={decrement}>-</button>
            <br />
            <input type="text" ref={inputRef}/>
            <button onClick={readdata}>ReadData</button>
            <button onClick={cleardata}>Clear</button>
        </div>
    );
}
export default CounterApp;*/

/*import '../css/CounterApp.css';
import { useState } from 'react';
function CounterApp(){
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
        <div className="counterapp">
            <button onClick={increment}>+</button> <br /><br />
            <p>{n}</p> <br /><br />
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default CounterApp;*/
/*import '../css/CounterApp.css';
import { useState } from 'react';
function CounterApp(){
    let [n,setN] = useState(0);
    let increment = ()=>{
        setN(n+1);
        console.log(n)
    }
    let decrement = ()=>{
        setN(n-1);
        console.log(n)
    }
    return (
        <div className='counterapp'>
            <button onClick={increment}>+</button><br />
            <p>{n}</p><br />
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default CounterApp;*/
import '../css/CounterApp.css';
import { useState } from 'react';
function CounterApp(){
    let [n,setN] = useState(0);
    let increment = ()=>{
        setN(n+1);
        console.log(n)
    }
    let decrement = ()=>{
        setN(n-1);
        console.log(n);
    }
    return (
        <div className='counterapp'>
            <button onClick={increment}>+</button><br /><br />
            <p>{n}</p> <br /><br />
            <button onClick={decrement}>-</button>
        </div>
    );
}
export default CounterApp; 