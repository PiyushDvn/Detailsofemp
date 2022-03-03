import React from 'react'; 
import { Link } from "react-router-dom"

    const Frontpage = () => {
        
    return (
      <div className="appCss">
        <h1>R SYSTEMS</h1>
        <lable>WELCOME TO OUR COMPANY </lable>
        <br></br>
        <br></br><Link to ="/empDetails"> Employee Details! </Link>
        
      </div>
    );
  }

  export default Frontpage