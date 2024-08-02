import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Authen/Login';
import Register from './Authen/Register';
import { jwtDecode } from 'jwt-decode';



function App() {

  const [user,setUser] = useState(null);

  function getUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);

    setUser(decodedToken)

    console.log(decodedToken);
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="landing" element={<Landing/>} />
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login getUser={getUserData}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
