import WorkForceComponent from "./WorkForceComponent";
function ViewWorkForce(){
    let workforce = [
        {
            wfno:1,
            wfname:'Arif',
            wfsalary:23000,
            wfdept:2
        },
        {
            wfno:2,
            wfname:'Mani',
            wfsalary:25000,
            wfdept:3
        },
        {
            wfno:3,
            wfname:'Charan',
            wfsalary:28000,
            wfdept:1
        },
    ]
    return (
        <div>
            {
                workforce.map((wf)=>{
                    return <WorkForceComponent wfno={wf.wfno} wfname={wf.wfname} wfsalary={wf.wfsalary} wfdept={wf.wfdept}/>
                })
            }
        </div>
    );
}
export default ViewWorkForce;