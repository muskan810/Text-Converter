// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,   // instead of "Switch"
  Route
} from "react-router-dom";

// let name = <b>"Muskan"</b>;
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      // document.title = 'TextConverter - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Update now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      // document.title = 'TextConverter - Light Mode';
    }
  }

  return (
    // <>
    // <h1>This is heading</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with me
    //     </a>
    //   </header>
    // </div> 
    // </>

    // <>
    // <div className="blank">Lovely</div>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo harum quidem possimus eum et. Fugiat aperiam, aspernatur sed quos quia saepe atque ea corrupti rem accusamus impedit sint animi vero est! Temporibus, ea debitis?</p>
    // </div>
    // </>

    <>
    {/* <Navbar tittle ="TextConverter" about ="About TextConverter"/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar tittle ="TextConverter" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <div className="container my-3">

    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
      <Route exact path="/" element={<Textform showAlert={showAlert} heading ="Try TextConverter - Word Counter, Character Counter, etc" mode={mode}/>}>
          </Route>
    </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;