import stylesOfHeader from "../header/header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiShinyOmega } from "react-icons/gi";
import { GiSunRadiations } from "react-icons/gi";
import ButtonOfMiniNav from "../menuForMiniDisplay/buttonOfMiniNav/ButtonOfMiniNav";
import { motion } from "framer-motion";

import '../../scssVariables/variables.scss';

const Header = ({
      hoverPageSection,
      pageHoverFunction,

      functionClickOnTheCartLink,
      clickOnTheCartLink,

      toggleMiniMenuState,
      toggleMiniMenuFunction,

}) => {

      const [activeLink, setActiveLink] = useState('link1');
      const [isHovering, setIsHovering] = useState(hoverPageSection);

      const animationForHeader = {
            hidden: {
                  y: 80,
            },
            visible: {
                  y: 0,
            },
      };

      const handleMouseEnter = () => {
            setIsHovering(true);
            return pageHoverFunction(true);
      };

      const handleMouseLeave = () => {
            setTimeout(() => hoverPageSection && isHovering ? pageHoverFunction(true) : pageHoverFunction(false), 1000)
            setIsHovering(false);
      };

      const rotationAngle = hoverPageSection ? 45 : 0;

      const iconStyle = {
            transform: `rotate(${rotationAngle}deg)`
      };

      const clickOnTheLinkCart = () => {
            functionClickOnTheCartLink(true);
      };

      const activeLinkFunction = (linkName) => {
            if (linkName == 'link5') {
                  clickOnTheLinkCart(!clickOnTheCartLink);
                  return setActiveLink('link5');
            }
            setActiveLink(linkName);
      };

      return (
            <section>
                  <motion.div
                        id={stylesOfHeader.headerContainer}
                        variants={animationForHeader}
                        initial="hidden"
                        whileInView="visible"
                  >
                        <header id={stylesOfHeader.header}>
                              <div id={stylesOfHeader.headerIconContainer}>
                                    <div id={stylesOfHeader.icon}>
                                          <GiShinyOmega size="35px" color="#2166FF" />
                                    </div>
                                    <div id={stylesOfHeader.textByIcon}>SUN</div>
                              </div>
                              <nav>
                                    <div className={stylesOfHeader.linkContainer}>
                                          <Link
                                                onClick={() => activeLinkFunction("link1")}
                                                to="/Home"
                                                className={activeLink == "link1" ? stylesOfHeader.active : ""}
                                          >Home</Link>
                                    </div>
                                    <div className={stylesOfHeader.linkContainer}>
                                          <Link
                                                onClick={() => activeLinkFunction("link2")}
                                                to="/about"
                                                className={activeLink == "link2" ? stylesOfHeader.active : ""}
                                          >About</Link>
                                    </div>
                                    <div className={stylesOfHeader.linkContainer}>
                                          <Link
                                                onClick={() => activeLinkFunction("link3")}
                                                to="/blog"
                                                className={activeLink == "link3" ? stylesOfHeader.active : ""}
                                          >Blog</Link>
                                    </div>
                                    <div
                                          onMouseEnter={handleMouseEnter}
                                          onMouseLeave={handleMouseLeave}
                                          className={stylesOfHeader.linkContainer}
                                          id={stylesOfHeader.pages}
                                    >
                                          <Link>Pages</Link>
                                          <span id={stylesOfHeader.iconForPages}

                                                style={iconStyle}
                                          >
                                                <GiSunRadiations color="blue" className="react-icon" size="25px" />
                                          </span>
                                    </div>
                                    <div className={stylesOfHeader.linkContainer}>
                                          <Link
                                                onClick={() => activeLinkFunction("link4")} to="/services"
                                                className={activeLink == "link4" ? stylesOfHeader.active : ""}
                                          >Services</Link>
                                    </div>

                                    <div className={stylesOfHeader.linkContainer}>
                                          <Link onClick={() => { activeLinkFunction("link5"); clickOnTheLinkCart() }}

                                                className={activeLink == "link5" ? stylesOfHeader.active : ""}
                                          >
                                                <span id={stylesOfHeader.cartLink}>Cart(
                                                      <span
                                                            id={stylesOfHeader.insideCartLink}
                                                            style={{ color: activeLink == "link5" ? '#d3d6df' : 'blue' }}
                                                      >O</span>)
                                                </span>
                                          </Link>
                                    </div>
                              </nav>

                              <div id={stylesOfHeader.headerButtonAndMiniButtonOfMenuAndCartSection}>

                                    <div id={stylesOfHeader.cartSectionForMiniDisplay}>
                                          <Link>Cart(<span
                                                style={{ color: activeLink == "link5" ? '#d3d6df' : 'blue' }}
                                          >O</span>)
                                          </Link>
                                    </div>

                                    <div id={stylesOfHeader.headerButton}>
                                          <button>Contact Us</button>
                                    </div>

                                    <div id={stylesOfHeader.menuForMiniDisplay}
                                          onClick={() => toggleMiniMenuFunction(!toggleMiniMenuState)}
                                    >
                                          <ButtonOfMiniNav
                                                toggleMiniMenuState={toggleMiniMenuState}
                                                toggleMiniMenuFunction={toggleMiniMenuFunction}
                                          />
                                    </div>
                              </div>
                        </header>
                  </motion.div>
            </section >
      )
}
export default Header;


