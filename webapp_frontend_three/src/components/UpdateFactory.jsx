// This code is for the Getting the data and shown in console.?
/*import { useState } from "react";
import axios from "axios";
function UpdateFactory(){
    let [id,setId] = useState('');
    /*let [name,setName] = useState('');
    let [role,setRole] = useState('');
    let [salary,setSalary] = useState('');
    let [location,setLocation] = useState('');
    let [ph_no,setPhno] = useState('');
    let handlefetch = ()=>{
        if (!id){
            alert('Please enter factory ID ');
            return;
        }
        axios.get(`http://127.0.0.1:8000/factory/update_fact/${id}/`)
        .then((resp)=>{
            console.log('Factory member data: ',resp.data);
            alert('Check console for fetched data!');
        }).catch((error)=>{
            console.log('Error fetching Factory member:',error.response?.data || error);
            alert('Error fetching factory.Check console.');
        });
    };
    return (
        <div>
            <h1>This is the update Factory Form </h1>
            <input type="text" value={id} onChange={event=>setId(event.target.value)}/>
            <button onClick={handlefetch}>Fetch data</button>
        </div>
    );
}
export default UpdateFactory;*/
/*
import { useState } from "react";
import axios from "axios";
import '../css/AddFactory.css';
function UpdateFactory(){
    let [id,setId] = useState('');
    let [name,setName] = useState('');
    let [role,setRole] = useState('');
    let [salary,setSalary] = useState('');
    let [location,setLocation] = useState('');
    let [ph_no,setPhno] = useState('');
    let handlefetch = ()=>{
        if (!id){
            alert('Please enter factory ID ');
            return;
        }
        axios.get(`http://127.0.0.1:8000/factory/update_fact/${id}/`)
        .then((resp)=>{
            console.log('Factory member data: ',resp.data);
            let data = resp.data;
            setName(data.name);
            setRole(data.role);
            setSalary(data.salary);
            setLocation(data.location);
            setPhno(data.ph_no);
        }).catch((error)=>{
            console.log('Error fetching Factory member:',error.response?.data || error);
            alert('Error fetching factory.Check console.');
        });
    };
    let handleupdate = (event)=>{
        event.preventDefault();
        let updatedata = {name,role,salary,location,ph_no};
        axios.put(`http://127.0.0.1:8000/factory/update_fact/${id}/`,updatedata)
        .then((resp)=>{
            alert('Factory updated successfully! ');
            console.log('Updated factory :',resp.data);
        }).catch((error)=>{
            console.log('Error updating Factory:',error);
            alert('Error updating Factory.Check console.');
        });
    };
    return (
        <div className="addfactory">
            <h1>This is the update Factory Form </h1>
            <input type="text" value={id} onChange={event=>setId(event.target.value)}/>
            <button onClick={handlefetch}>Fetch data</button>
            <form onSubmit={handleupdate}>
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
export default UpdateFactory;*/
import { useState } from "react";
import axios from "axios";
import '../css/UpdateFactory.css';
function UpdateFactory(){
    let [id,setId] = useState('');
    let [name,setName] = useState('');
    let [role,setRole] = useState('');
    let [salary,setSalary] = useState('');
    let [location,setLocation] = useState('');
    let [ph_no,setPhno] = useState('');
    let handledata = ()=>{
        if (!id){
            alert('Please enter Factory id!.')
            return;
        }
        axios.get(`http://127.0.0.1:8000/factory/update_fact/${id}/`)
        .then((resp)=>{
            console.log(resp)
            let data = resp.data;
            setName(data.name);
            setRole(data.role);
            setSalary(data.salary);
            setLocation(data.location);
            setPhno(data.ph_no);
        }).catch((error)=>{
            alert('Factory details are causing error!.')
            console.log(error)
        })
    };
    let updatehandle = (event)=>{
        event.preventDefault();
        let updateddata = {name,role,salary,location,ph_no};
        axios.put(`http://127.0.0.1:8000/factory/update_fact/${id}/`,updateddata)
        .then((resp)=>{
            alert('Factory info updated successfully');
            console.log(resp)
        }).catch((error)=>{
            alert('Factory info is failed to update');
            console.log(error);
        });
    }
    return (
        <div className="updatefactory">
            <h1>This is the update form</h1>
            <input type="text" value={id} onChange={event=>setId(event.target.value)}/>
            <button onClick={handledata}>Fetchdata</button>
            <form onSubmit={updatehandle}>
                <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
                <input type="text" value={role} onChange={event=>setRole(event.target.value)}/>
                <input type="number" value={salary} onChange={event=>setSalary(event.target.value)}/>
                <input type="text" value={location} onChange={event=>setLocation(event.target.value)}/>
                <input type="number" value={ph_no} onChange={event=>setPhno(event.target.value)}/>
                <button type="submit">UpdateData</button>
            </form>
        </div>
    );
}
export default UpdateFactory;