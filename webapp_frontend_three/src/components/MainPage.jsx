/*import EmpComponent from "./EmpCompenent";
import EventHandling from "./EventHandling";
import ImageComponent from "./ImageComponent";
import '../css/EventHandling.css';
import '../css/MainPage.css';
import { useState } from "react";
function MainPage(){
    let [show,setShow] = useState(false)
    let changeshow = ()=>{
        setShow(!show)
        console.log(show)
    }
    return (
        <main className="mainpage">
            <button onClick={changeshow}>show/hide</button>
            {show? <ImageComponent/>: ''}
        </main>
    );
}
export default MainPage;*/
import CounterApp from "./CounterApp";
import ImageComponent from "./ImageComponent";
import EmpComponent from "./EmpComponent";
import EventHandling from "./EventHandling";
import AddToCart from "./AddToCart";
import ViewEmployees from "./ViewEmployees";
import Increment from "./Increment";
import '../css/MainPage.css';
import WorkForceComponent from "./WorkForceComponent";
import ViewWorkForce from "./ViewWorkForce";
import FactoryComponent from "./FactoryComponent";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ViewFactory from "./ViewFactory";
import AddFactory from "./AddFactory";
import UpdateFactory from "./UpdateFactory";
import DeleteFactory from "./DeleteFactory";
import Home from "./Home";
import Login from "./Login";
function MainPage(){
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/viewfactory" element={<ViewFactory/>}/>
            <Route path="/addfactory" element={<AddFactory/>}/>
            <Route path="/updatefactory" element={<UpdateFactory/>}/>
            <Route path="/deletefactory" element={<DeleteFactory/>}/>
        </Routes>
    );
}
export default MainPage;