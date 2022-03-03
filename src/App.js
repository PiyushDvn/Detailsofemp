import './App.css';
import Frontpage from './frontPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeR from './empDetails';
import Popup from './Popup';
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
  super(props);
  this.state = { showPopup: false };
  }

  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

  render() {
    return (
      <div>
        <Router>
     <div className="appCss">
       <Frontpage />
       <Routes>
         <Route path ='/'element={<Frontpage />}>
         </Route>
         <Route exact path='/empDetails' element={<EmployeeR />}>
         </Route>   
               <Route path="*">
          </Route> 
      </Routes>
     </div>
     </Router>
       <h1> Popuppp </h1>
       <button onClick={this.togglePopup.bind(this)}> CLICK ME!</button>
       {this.state.showPopup ?
         <Popup
          text='Close'
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div>

    );
  }
}

export default App;
