import React from "react";
import '../css/Home.css'; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  useEffect(()=>{
    let isLogged = localStorage.getItem('login');
    if (!isLogged){
      navigate('/login');
    }
  },[]);
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Factory Management System</h1>
        <p>
          Manage your factories, workforce, and inventory easily.  
          Select an option from the sidebar to get started.
        </p>
        <div className="home-buttons">
          <a href="/addfactory" className="btn">Add Factory</a>
          <a href="/view" className="btn view-btn">View Factories</a>
        </div>
      </div>
    </div>
  );
}

export default Home;