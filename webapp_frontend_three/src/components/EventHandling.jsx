//THIS PART IS WHAT WE WRITE IN TEXTBOX IT WILL SHOW IN CONSOLE(NORMAL& BADWAY OF CODING).
/*import '../css/EventHandling.css';
import { useState } from 'react';
function EventHandling(){
    let [data,setData] = useState();
    let readdata = ()=>{
        let d;
        d = document.querySelector('#t1').value
        setData(d);
        console.log(data)
    }
    return (
        <div className='eventhandling'>
            <input type="text" id='t1'/>
            <button onClick={readdata}>Read</button>
            <p>{data}</p>
        </div>
    );
}
export default EventHandling;*/

// THIS PART IS IF WE WRITE IN TEXTBOX THE DATA IS SHOWN IN DOWN.? THAT'S IT?
/*import '../css/EventHandling.css';
import { useState } from 'react';
function EventHandling(){
    let [data,setData] = useState();
    let readdata = (event)=>{
        let d;
        d = document.querySelector('#t1').value
        setData(d);
        console.log(data)
    }
    return (
        <div className="eventhandling">
            <input type="text" id='t1'/>
            <button onClick={readdata}>Read</button>
            <p>{data}</p>
        </div>
    );
}
export default EventHandling;

//THIS PART IS WHEN WE ARE TYPING IN THE TEXT BOX THE DATA IS SHOWING IN LIVE.?
import { useState } from 'react';
import '../css/EventHandling.css';
function EventHandling(){
    let [data,setData] = useState();
    let readdata = (event)=>{
        let d;
        d = event.target.value
        setData(d);
        console.log(data)
    }
    return (
        <div className='eventhandling'>
            <input type="text" id='t1'onChange={readdata}/>
            <button onClick={readdata}>Read</button>
            <p>{data}</p>
        </div>
    );
}
export default EventHandling;*/
/*
import '../css/EventHandling.css';
import { useState } from 'react';
function EventHandling(){
    let[data,setData] = useState();
    let readdata = ()=>{
        let d;
        d = document.getElementById('t1').value
        setData(d);
        console.log(data);
    }
    return (
        <div className="eventhandling">
            <input type="text" id='t1'/>
            <button onClick={readdata}>Read</button>
            <p>{data}</p>
        </div>
    );
}
export default EventHandling;*/

import '../css/EventHandling.css';
import { useState } from 'react';
function EventHandling(){
    let [data,setData] = useState();
    let readdata = ()=>{
        let d;
        d = document.getElementById('t1').value;
        setData(d);
        console.log(data)
    }
    return (
        <div className='eventhandling'>
            <input type="text" id='t1' />
            <button onClick={readdata}>Read</button>
            <p>{data}</p>
        </div>
    );
}
export default EventHandling;