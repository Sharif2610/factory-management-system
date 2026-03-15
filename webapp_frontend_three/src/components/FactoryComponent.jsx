import '../css/FactoryComponent.css';
function FactoryComponent(props){
    return (
        <div className="factorycomp">
            <p>Factory name: <strong>{props.fname}</strong></p>
            <p>Factory role: <strong>{props.frole}</strong></p>
            <p>Factory salary: <strong>{props.fsalary}</strong></p>
            <p>Factory location: <strong>{props.flocation}</strong></p>

        </div>
    );
}
export default FactoryComponent;