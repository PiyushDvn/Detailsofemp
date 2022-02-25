import React from 'react';
import './App.css';
import Frontpage from './frontPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeR from './empDetails';

function App() {
  return (
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
  );
}

export default App;
