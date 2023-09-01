import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      // @ts-ignore
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
      // setInterval(() => {
      //   document.title = "Textutils";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutTitle="About"
        // @ts-ignore
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Text Analyser" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}
export default App;
