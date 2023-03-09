import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [btnText, setBtnText] = useState("Enable DarkMode");

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
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable lightMode");
      document.body.style.backgroundColor = "#42424e";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtiles - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtiles is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtiles now";
      // }, 1500);
    } else {
      setMode("light");
      setBtnText("Enable darkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtiles - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtiles" aboutText="About TextUtiles" /> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtiles"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}></Route> */}
            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* }
            ></Route> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
