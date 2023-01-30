import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React, { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';
import ProtectedRoute from './pages/ProtectedRoute';


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' 
          element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Reg onFormSwitch={toggleForm} />
        } />
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;