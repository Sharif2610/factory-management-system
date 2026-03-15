/*import FactoryComponent from "./FactoryComponent";
function ViewFactory(){
    let factory = [
        {
            Factoryname : 'Aravind',
            Factoryrole : 'worker',
            Factorysalary : 18000,
            Factorylocation : 'Hyd',
            Factoryphone : 7865459023
        },
        {
            Factoryname : 'Bharat',
            Factoryrole : 'supervisor',
            Factorysalary : 36000,
            Factorylocation : 'chen',
            Factoryphone : 7845259023
        },
    ]
    return (
        <div>
            <h1>This above details are from Backend API.</h1>
            {
                factory.map((fact)=>{
                    return <FactoryComponent fname={fact.Factoryname} frole={fact.Factoryrole} fsalary={fact.Factorysalary} flocation={fact.Factorylocation} fphone={fact.Factoryphone}/>
                })
            }
        </div>
    );
}
export default ViewFactory*/
import { useEffect, useState } from "react";
import axios from "axios";
import FactoryComponent from "./FactoryComponent";

function ViewFactory() {
    let [data, setData] = useState([]);
    let [next, setNext] = useState(null);
    let [prev, setPrev] = useState(null);
    let [current, setCurrent] = useState(1);

    let fetchdata = (page = 1) => {
        axios.get(`http://127.0.0.1:8000/factory/list/?page=${page}`)
            .then(resp => {
                setData(resp.data.results);
                setNext(resp.data.next);
                setPrev(resp.data.previous);
                setCurrent(page);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <h1>This information is from backend API (Page {current})</h1>
            {data.map((fact, index) => (
                <FactoryComponent
                    key={index}
                    fname={fact.name}
                    frole={fact.role}
                    fsalary={fact.salary}
                    flocation={fact.location}
                />
            ))}

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '30px',
                maxWidth:'700px',
                marginLeft:'auto',
                marginRight:'auto'
            }}>
                {prev && <button onClick={() => fetchdata(current - 1)}>Previous</button>}
                {next && <button onClick={() => fetchdata(current + 1)}>Next</button>}
            </div>
        </div>
    );
}

export default ViewFactory;