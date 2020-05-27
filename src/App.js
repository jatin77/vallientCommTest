import React from "react";
import "./App.css";
import AlertsMsg from "./Components/Shared/alert/Alert";
import HomePage from "./Pages/homePage/HomePage";

function App() {
  return (
    <>
      <AlertsMsg />
      <HomePage />
    </>
  );
}

export default App;
