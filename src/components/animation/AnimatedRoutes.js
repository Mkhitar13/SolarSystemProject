import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Registration from "../registration/Registration";
import Pricing from "../cart/pricing/Pricing";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

      const location = useLocation();

      return (
            <AnimatePresence>
                  <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/Registration" element={<Registration />} />
                  </Routes>
            </AnimatePresence>
      );
}
export default AnimatedRoutes;