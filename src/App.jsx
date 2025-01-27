import React from 'react';
import Todo from './pages/Todo';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Navbar from './component/Navbar';
import { Navigate } from 'react-router-dom';
import Projects from './pages/projects';


const App = () => {

  return (
    
    <div>
      <h1 style={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>
        Hello World! </h1>
          <Navbar /> 
        <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/projects" element={<Projects />} />


         {/**  <Route path="/" element={<Navigate to="/home" replace />} />*/}  
        </Routes>
        </div>
      </div> 
      
  );
};

export default App;

    {/**   
         <Route path="/projects" element={<Projects />} />
        <div className="PayApp">
        <header className="App-header">
          <nav className="menu-bar">
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/Todo">Todo</a></li>
            </ul>
          </nav>
        </header>
        <Todo />
      </div> 
      
       <nav className="menu-bar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </nav>

      */}
    