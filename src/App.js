import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import "./App";
// import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <Home /> */}
    </div>
  );
}

export default App;
