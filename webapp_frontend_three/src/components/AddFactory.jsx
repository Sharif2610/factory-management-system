import '../css/AddFactory.css';
import { useState } from 'react';
import axios from 'axios';
function AddFactory(){
    let [name,setName] = useState('');
    let [role,setRole] = useState('');
    let [salary,setSalary] = useState('');
    let [location,setLocation] = useState('');
    let [ph_no,setPhno] = useState('');

    let handlesubmit = (event)=>{
        event.preventDefault()
        let data = {name,role,salary,location,ph_no}
        axios.post('http://127.0.0.1:8000/factory/list/',data)
        .then((resp)=>{
            alert('Factory added successfully! ');
            setName('');setRole('');setSalary('');setLocation('');setPhno('');
            console.log(resp.data);
        }).catch((error)=>{
            alert('Error adding Factory');
            console.log(error);
        });
    };
    return (
        <div className="addfactory">
            <h1>This is the form to Add Factory to Backend. </h1>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Name" value={name} onChange={event=> setName(event.target.value)}/><br /><br />
                <input type="text" placeholder="Role" value={role} onChange={event=>setRole(event.target.value)}/><br /><br />
                <input type="number" placeholder="Salary" value={salary} onChange={event=>setSalary(event.target.value)}/><br /><br />
                <input type="text" placeholder="Location" value={location} onChange={event=>setLocation(event.target.value)}/><br /><br />
                <input type="number" placeholder="Phno" value={ph_no} onChange={event=>setPhno(event.target.value)}/><br /><br />
                <button type='submit'> Add Data</button>
            </form>
        </div>
    );
}
export default AddFactory;