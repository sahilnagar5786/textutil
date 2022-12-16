//import { useState } from "react";
import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setmode] = useState('light'); //Wheater dark mode is enabled or not.
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled.", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled.", "success")
    }

  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} togglemode={togglemode} />
        <Alert Alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/" element={<Textform showalert={showalert} heading="Enter The Text Below To Analize" mode={mode}/>}/> */}
          <div className="container my-4"></div>
         <Textform showalert={showalert} heading="Enter The Text Below To Analize" mode={mode} />
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Footer/>

    </>
  ); 
}

export default App;
