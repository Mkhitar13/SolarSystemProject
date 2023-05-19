import styles from "../pages/pages.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pages = ({ isShown }) => {
      return (
            <motion.div
                  id={styles.containerOfPages}
                  animate={{ display: !isShown ? "grid" : "none" }}
            >
                  <div id={styles.firstColumnOfPages}>
                        <h2>Pages</h2>
                        <div id={styles.listOfFirstSection}>
                              <p id={styles.ContainerOfLinks}>
                                    <Link to="/Home">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/pages">Pages</Link>
                              </p>
                              <p id={styles.ContainerOfLinks}>
                                    <Link to="/services">Services</Link>
                                    <Link to="/Home">Case Studies</Link>
                                    <Link to="/Home">Case Study Single</Link>
                                    <Link to="/Home">Blog Post</Link>
                              </p>
                              <p id={styles.ContainerOfLinks}>
                                    <Link to="/Home">Careers</Link>
                                    <Link to="/Home">Careers Single</Link>
                                    <Link to="/Home">Pricing</Link>
                                    <Link to="/Home">Pricing Single</Link>
                              </p>
                        </div>
                  </div>

                  <div id={styles.secondColumnOfPages}>
                        <h2>Utility pages</h2>
                        <p>
                              <Link to="/Home">Start Here</Link>
                              <Link to="/Home">Style Guide</Link>
                              <Link to="/Home">Password Protected</Link>
                              <Link to="/Home">404 Not Found</Link>
                              <Link to="/Home">Licenses</Link>
                              <Link to="/Home">Changelog</Link>
                              <Link to="/Home"><b>Browse More Templates</b></Link>
                        </p>
                  </div>
            </motion.div>
      )
}
export default Pages;


