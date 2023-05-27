import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import './App.scss';
import { RootLayout } from "../src/components/layouts/RootLayout";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Services from "./components/services/Services";
import Registration from "./components/registration/Registration";
import Pricing from "./components/cart/pricing/Pricing";

const App = () => {

  return (
    <div id='app'>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route exact path="SolarSystemProject" element={<Home />} />
              <Route exact path="home" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="services" element={<Services />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="Registration" element={<Registration />} />
            </Route>
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
}
export default App;


