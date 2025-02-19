import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;