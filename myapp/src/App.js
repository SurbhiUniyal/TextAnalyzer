
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#343a40';
  }else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}



  return (
    <BrowserRouter>
  
    <Navbar title="Text Analyzer" mode={mode} togglemode={toggleMode}/>
    <div className='container'>
    <Routes>
          <Route path="/" element={<TextArea mode={mode} togglemode={toggleMode}/>} />
          <Route path="/about" element= {<About mode={mode} />} />
      
          
    </Routes>
    
    </div>
    
 
  
    </BrowserRouter>
    );
}

export default App;
