import '../css/DeleteFactory.css';
import { useState } from "react";
import axios from "axios";

function DeleteFactory() {
  // State
  let [id, setId] = useState('');
  let [name, setName] = useState('');
  let [role, setRole] = useState('');
  let [salary, setSalary] = useState('');
  let [location, setLocation] = useState('');
  let [ph_no, setPhno] = useState('');

  // Fetch data by ID
  let fetchData = () => {
    if (!id) {
      alert('Please enter Factory ID!');
      return;
    }

    axios.get(`http://127.0.0.1:8000/factory/update_fact/${id}/`)
      .then((resp) => {
        let data = resp.data;
        setName(data.name);
        setRole(data.role);
        setSalary(data.salary);
        setLocation(data.location);
        setPhno(data.ph_no);
      })
      .catch((error) => {
        alert('Failed to fetch data!');
        console.log(error);
      });
  };

  // Delete data
  let deleteData = () => {
    if (!window.confirm('Are you sure you want to delete this Factory?')) return;

    axios.delete(`http://127.0.0.1:8000/factory/update_fact/${id}/`)
      .then((resp) => {
        alert('Factory deleted successfully!');
        // Clear state
        setId('');
        setName('');
        setRole('');
        setSalary('');
        setLocation('');
        setPhno('');
        console.log(resp);
      })
      .catch((error) => {
        alert('Factory deletion failed!');
        console.log(error);
      });
  };

  return (
    <div className="deletefactory">
      <h1>Delete Factory Form</h1>

      {/* Input to enter Factory ID */}
      <input
        type="text"
        placeholder="Enter Factory ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button type="button" onClick={fetchData}>Fetch Data</button>

      {/* Show form with fetched data */}
      <div className="deleteform">
        <label>
            Name:
            <input type="text" value={name} />
        </label><br />
        <label>
            Role:
            <input type="text" value={role} readOnly />
        </label><br />
        <label>
            Salary:
            <input type="number" value={salary} readOnly />
        </label><br />
        <label>
            Location:
            <input type="text" value={location} readOnly />
        </label><br />
        <label>
            Phno:
            <input type="number" value={ph_no} readOnly />
        </label><br />
        <button type="button" onClick={deleteData}>Delete Factory</button>
      </div>
    </div>
  );
}

export default DeleteFactory;