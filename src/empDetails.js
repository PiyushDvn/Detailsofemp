import React from "react";
function Dataa() {

const employees =[
    {ID:1,Name:'abc',Team:'Matrix',PhoneNumber:46336454},
    {ID:2,Name:'sdsf',Team:'Mariens',PhoneNumber:5872895},
    {ID:3,Name:'mbc',Team:'Marvels',PhoneNumber:96336454},
    {ID:1,Name:'abc',Team:'Matrix',PhoneNumber:46336454},
    {ID:2,Name:'sdsf',Team:'Mariens',PhoneNumber:5872895},
    {ID:3,Name:'mbc',Team:'Marvels',PhoneNumber:96336454},
];
return (
   
    <div className="container">
    <table className="tablee">
        <tr>
        {/* <span class="white_bg"> */}
            <th>MATRIX</th>
            <th>MARIENS</th>
            <th>MARVELS</th>
            {/* </span> */}
        </tr>
        {
        employees.map((employee,index) => (
                <tr data-index={index}>
                <td>{employee.ID}</td>
                <td>{employee.Name}</td>
                <td>{employee.Team}</td>
                </tr>
        ))}
    
        </table>
        
    </div>
    
)
        }


export default Dataa