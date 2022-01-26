import React from "react";
import "./index.css";
import Sidebar from "../src/components/sidebar";
import Header from "../src/components/header";
import Hero from "../src/components/hero";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Hero />
    </div>
  );
};

export default App;
