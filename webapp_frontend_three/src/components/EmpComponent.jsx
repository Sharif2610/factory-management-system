/*import '../css/EmpComponent.css';
function EmpComponent(props){
    return (
        <div className="empcomponent">
            <p>Employe No: <strong>{props.eno}</strong></p>
            <p>Employee Name: <strong>{props.ename}</strong></p>
            <p>Employee Salary: <strong>{props.esalary}</strong></p>
        </div>
    );
}
export default EmpComponent;*/
import '../css/EmpComponent.css';
function EmpComponent(props){
    return (
        <div className="empcomponent">
            <p>Employee No: <strong>{props.eid}</strong></p>
            <p>Employee Name: <strong>{props.ename}</strong></p>
            <p>Employee Department: <strong>{props.edepartment}</strong></p>
            <p>Employee Salary: <strong>{props.esalary}</strong></p>
            <p>Employee City: <strong>{props.ecity}</strong></p>
        </div>
    );
}
export default EmpComponent;