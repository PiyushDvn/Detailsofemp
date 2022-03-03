import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Dataa() {

const employees =[
    {ID:1,Name:'Piyush Dhawan',Team:'Matrix',PhoneNumber:46336454,Project:'Wenco',Post:'QA'},
    {ID:2,Name:'Rahul',Team:'Mariens',PhoneNumber:5872895,Project:'Wenco',Post:'Testing'},
    {ID:3,Name:'Manas',Team:'Marvels',PhoneNumber:96336454,Project:'EVM',Post:'Backend Deveoper'},
    {ID:4,Name:'Muskan',Team:'Matrix',PhoneNumber:46336454,Project:'Wenco',Post:'Frontend Developer'},
    {ID:5,Name:'Ayush',Team:'Mariens',PhoneNumber:5872895,Project:'EVM',Post:'QA'},
    {ID:6,Name:'Mehak',Team:'Marvels',PhoneNumber:96336454,Project:'EVM',Post:'UI/UX Design'},
    {ID:7,Name:'Rishit',Team:'Matrix',PhoneNumber:16336454,Project:'Wenco',Post:'QA'},
];
return (
   
    <div className="container">
    <table className="tablee">
        <tr>
            <th>ID</th>
            <th>NAMES</th>
            <th>TEAMS</th>
            <th>PHONE NUMBER</th>
        </tr>
        {
        employees.map((employee,index) => (
                <tr data-index={index}>
                    <td>{employee.ID}</td>
                <Popup trigger={<label><td>{employee.Name}</td></label>}
                position="right center">
                    <div>
                        {employees.map((employee,index) => (
                            <tr data-index={index}>
                        <td>Project: {employee.Project}<br></br> Post: {employee.Post}
                    </td></tr>))}
                    </div>
                </Popup>
                <br></br>
                <td>{employee.Team}</td>
                <td>{employee.PhoneNumber}</td>
                </tr>
        ))}
    </table> 
    </div>
)
        }

export default Dataa