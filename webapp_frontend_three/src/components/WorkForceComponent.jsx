import '../css/WorkForceComponent.css';
function WorkForceComponent(props){
    return (
        <div className='workforcecomponent'>
            <p>Workforce No: <strong>{props.wfno}</strong></p>
            <p>Workforce Name: <strong>{props.wfname}</strong></p>
            <p>Workforce Salary: <strong>{props.wfsalary}</strong></p>
            <p>Workforce Department: <strong>{props.wfdept}</strong></p>
        </div>
    );
}
export default WorkForceComponent;