import React, { Suspense, useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              } />
              <Route path="/projects" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Projects />
                </Suspense>
              } />
              <Route path="*" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigate to="/"/>
                </Suspense>
              } />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
