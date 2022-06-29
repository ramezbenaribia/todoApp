import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import ErrorNotFound from "./Pages/Error/ErrorNotFound";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
