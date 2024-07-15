import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
