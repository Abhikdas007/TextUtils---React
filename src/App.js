import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
// import About from "./components/About";
import React, { useState} from "react";
import Alert from "./components/Alert";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"; //,

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggel = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode is enable", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Superb Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Downlode TextUtils now';
      // }, 1500);

      // ========== the avobe function is used for blinking tittle ==========
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is enable", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar tittle="TestUtils" mode={mode} toggelMode={toggel} />
        <Alert alert={alert} />
        <div className="container mb-8">
          {/* <Routes> */}
            {/* <Route exact path='/' element={<TextForm showAlert={showAlert}  heading="Test to Analyze Below"/>} /> */}
            <TextForm showAlert={showAlert}  heading="Test to Analyze Below"/>
           
            {/* <Route exact path='/about' element={<About/>} /> */}
          {/* </Routes> */}
          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
