import stylesOfAlertCartSection from "./alertCartSection.module.scss";
import { Divide as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const AlertCartSection = ({ clickOnTheCartLink, functionClickOnTheCartLink }) => {

      const navigate = useNavigate();

      const animationForSection = {
            hidden: {
                  scale: 0,
                  height: 0,
            },
            visible: (duration) => ({
                  scale: 1,
                  height: '45%',
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const goToPricing = () => {
            functionClickOnTheCartLink(false);
            return navigate("/pricing");
      };

      const closeCartSection = () => {
            return setTimeout(() => functionClickOnTheCartLink(false), 50);
      }

      return (
            <section id={stylesOfAlertCartSection.containerOfAlertCartSection}>
                  <motion.div
                        id={stylesOfAlertCartSection.nucleusOfAlertCartSection}
                        variants={animationForSection}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 4 }}
                  >
                        <div id={stylesOfAlertCartSection.containerOfDescriptionAndCloseButtonInAlertCartSection}>
                              <p id={stylesOfAlertCartSection.DescriptionInAlertCartSection}>Your Cart</p>
                              <div id={stylesOfAlertCartSection.containerOfCloseButtonInAlertCartSection}>
                                    <Hamburger toggled={clickOnTheCartLink} toggle={closeCartSection} />
                              </div>
                        </div>
                        <div id={stylesOfAlertCartSection.containerOfButtonAndTitleInAlertCartSection}>
                              <h2 id={stylesOfAlertCartSection.TitleInAlertCartSection}>Go To Pricing</h2>
                              <div id={stylesOfAlertCartSection.containerOfButtonInAlertCartSection}>
                                    <Link to="/pricing">
                                          <input type="button" value="START ?" onClick={goToPricing} />
                                    </Link>
                              </div>
                        </div>
                  </motion.div>
            </section>
      )
}

export default AlertCartSection;