import styles from "../mainOfMiniMenu/mainOfMiniMenu.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiSunRadiations } from "react-icons/gi";
import Pages from "../../pages/Pages";

import { motion } from "framer-motion";

const MainOfMiniMenu = ({ toggleMiniMenuState, toggleMiniMenuFunction }) => {
      const [isShown, setIsShown] = useState(false);
      const [togglePage, setTogglePage] = useState(false);

      const togleOfPageSide = () => {
            setTogglePage(!togglePage);
      }

      return (
            <motion.div
                  animate={{
                        height: toggleMiniMenuState ? "0vh" : "90vh",
                        display: toggleMiniMenuState ? "none" : "grid"
                  }}
                  id={styles.containerOfMiniMenu}
            >
                  <nav>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link
                                    onClick={() => toggleMiniMenuFunction(true)}
                                    to="/Home"
                              >Home</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link
                                    onClick={() => toggleMiniMenuFunction(true)}
                                    to="/About"
                              >About</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link
                                    onClick={() => toggleMiniMenuFunction(true)}
                                    to="/blog"
                              >Blog</Link>
                        </div>

                        <div
                              className={styles.linkContainerForMiniMenu}
                              id={styles.pagesToggleForMiniMenu}
                              onClick={togleOfPageSide}
                        >
                              <Link> Pages </Link>
                              <span id={styles.iconForPages}>
                                    <GiSunRadiations color="#2166FF" size="35px" />
                              </span>
                        </div>
                        <motion.div
                              className={styles.linkContainerForMiniMenu}
                              id={styles.pagesSideInMiniMenu}
                              animate={{
                                    height: !togglePage ? "0vh" : "auto",
                                    display: !togglePage ? "none" : "grid"
                              }}
                        >
                              <Pages isShown={isShown} setIsShown={setIsShown} />
                        </motion.div>
                        <div className={styles.linkContainerForMiniMenu}>
                              <Link
                                    onClick={() => toggleMiniMenuFunction(true)}
                                    to="/services">Services</Link>
                        </div>
                        <div className={styles.linkContainerForMiniMenu} id={styles.cartOfLinks}>
                              <Link
                                    onClick={() => toggleMiniMenuFunction(true)}
                                    to="/cart">Cart( <span style={{ color: '#d3d6df' }}>O</span> )
                              </Link>
                        </div>
                  </nav>
                  <div id={styles.headerButtonForMiniMenu}>
                        <input type="button" value="Contact Us" />
                  </div>
            </ motion.div>
      )
}
export default MainOfMiniMenu;