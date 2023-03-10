import "./App.css";
import Aboutus from "./components/Aboutus";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white"); //C0DEFF//AAE3E2//ECF9FF
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "#162c35"; //#6feedb//#042743
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("white");
      document.body.style.backgroundColor = "#d4eefb"; //#162c35//ECF9FF
      showAlert("Light mode Enabled", "success");
    }
  };

  // const switchlogo=()=>{

  //};
  //      <Navbar title="TitleUtils" about="About" mode={mode} toggleMode={toggleMode} />

  return (
    <>
      <Router>
        <Navbar title="TitleUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<Aboutus />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
