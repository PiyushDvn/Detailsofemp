// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// export default function Popupp(){
// return(
// <div>
// 	<Popup trigger={<button> Click to open popup </button>}
// 	position="right center">
// 	<div>Hello</div>
// 	</Popup>
//     <br></br>
//     <Popup trigger={<button> Close Pop Up </button>}
// 	position="bottom">
// 	<div>Helloooooooo</div>
// 	</Popup>
// </div>
// )
// };


import React from 'react';

const employees =[
  {ID:1,Name:'Piyush Dhawan',Team:'Matrix',PhoneNumber:46336454,Project:'Wenco',Post:'QA'},
  {ID:2,Name:'Rahul',Team:'Mariens',PhoneNumber:5872895,Project:'Wenco',Post:'Testing'},
  {ID:3,Name:'Manas',Team:'Marvels',PhoneNumber:96336454,Project:'EVM',Post:'Backend Deveoper'},
  {ID:4,Name:'Muskan',Team:'Matrix',PhoneNumber:46336454,Project:'Wenco',Post:'Frontend Developer'},
  {ID:5,Name:'Ayush',Team:'Mariens',PhoneNumber:5872895,Project:'EVM',Post:'QA'},
  {ID:6,Name:'Mehak',Team:'Marvels',PhoneNumber:96336454,Project:'EVM',Post:'UI/UX Design'},
  {ID:7,Name:'Rishit',Team:'Matrix',PhoneNumber:16336454,Project:'Wenco',Post:'QA'},
];



class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <p> {
          employees.map((employee,index) => (
                            <tr data-index={index}>
                        <td>Name: {employee.Name}
                        Team: {employee.Team}
                        Project: {employee.Project} 
                        Post: {employee.Post}
                    </td></tr>))} </p>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;