
import './App.css';
// import DarkMode from './components/DarkMode';
import React, {useState} from 'react'

import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {

  const [mode,setMode] = useState('light')
  
  const toggleMode = ()=>{
    
    if(mode==='light') {
      setMode('dark')
      
      document.body.style = 'background-image: linear-gradient(#42424a, black);height:100vh;color:white;';
      
    }
    else{
      setMode('light')
      
      document.body.style = 'background-image: (rgb(255 255 255), #6ba5f9);height:100vh;color:black;';
    }
  }
 
  return (
    <>
    <div >
    <Navbar title="MANAS" about="CONTACT" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-7" >
    <TextBox heading="ENTER TEXT TO ANALYZE"  />
     {/* <DarkMode/>  */}
     
    </div>
    </div>
  
 
  </>
  );
}

export default App;
