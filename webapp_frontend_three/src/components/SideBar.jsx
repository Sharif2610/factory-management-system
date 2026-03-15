import { Link } from "react-router-dom";
function SideBar(){
    return (
        <aside>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addfactory">Insert</Link></li>
                <li><Link to="/updatefactory">Update</Link></li>
                <li><Link to="/viewfactory">View</Link></li>
                <li><Link to="/deletefactory">Delete</Link></li>
            </ul>
        </aside>
    );
}
export default SideBar;