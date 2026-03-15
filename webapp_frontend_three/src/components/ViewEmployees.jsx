/*import { useEffect,useState } from "react";
import axios from "axios";
import EmpComponent from "./EmpComponent";
function ViewEmployees(){
    let [data,setData] = useState([]);
    useEffect(()=>{
        let get_url = 'http://127.0.0.1:8000/employeesapi/getemployees'
        axios.get(get_url).then((resp)=>{
            console.log(resp.data.results)
            setData(resp.data.results);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <div>
            <h1>This details are from the backend Employees Api </h1>
            {
                data.map((emp)=>{
                    return <EmpComponent eno={emp.id} ename={emp.name} salary={emp.salary} department={emp.department}/>
                })
            }
        </div>
    );
}
export default ViewEmployees;*/

import { useEffect,useState } from "react";
import axios from "axios";
import EmpComponent from "./EmpComponent";
function ViewEmployees(){
    let [data,setData] = useState([])
    useEffect(()=>{
        let get_url = 'http://127.0.0.1:8000/employeesapi/getemployees';
        axios.get(get_url).then((resp)=>{
            console.log(resp.data.results)
            setData(resp.data.results);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <div>
            <h1>The below details are from the Backend Api.</h1>
            {
                data.map((emp)=>{
                    return <EmpComponent key = {emp.id} eid={emp.id} ename={emp.name} edepartment={emp.department} esalary={emp.salary} ecity={emp.city}/>
                })
            }
        </div>
    );
}
export default ViewEmployees;