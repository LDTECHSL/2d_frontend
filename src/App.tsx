import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Navigation from './NavigationBar/Navigation';
import Home from './Home/Home';

function App() {
  
  const location = useLocation();
  const isLoginPage = location.pathname === "/"
  const isSignUpPage = location.pathname === "/signup"
  return (
    <div className="App">
      {!isLoginPage && !isSignUpPage && <Home />}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>        
        <Route path='/home' element={<Navigation/>}/>
      </Routes>
    </div>
  );
}

export default App;
