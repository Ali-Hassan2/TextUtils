import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mod2, setMod2] = useState("light");
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const mode2 = () => {
    if (mod2 === 'light') {
      setMod2('blue');
      document.body.style.backgroundColor = '#0c021c';
      document.body.style.color = '#fff';
      showAlert("Blue mode has been enabled.", 'success');
    } else {
      setMod2('light');
      document.body.style.backgroundColor = '#fff';
    }
  };

  const darkmodefunc = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#111';
      showAlert("Dark mode has been enabled", 'success');
      document.title = 'TextUtils - Dark Mode';
      document.body.style.color = '#fff';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar title="Application" mode={mode} mod2={mod2} darkmodefunc={darkmodefunc} mode2={mode2} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Text Here" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
