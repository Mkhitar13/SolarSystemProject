
import styles from "./ourAddresses.module.scss";
import imgOfOurAddresses from "../../../images/imgOfOurAddresses.png"
import { RiMailSendLine } from "react-icons/ri";
import { TbPhoneCalling } from "react-icons/tb";

import { motion } from "framer-motion";

const OurAddresses = () => {

      const animationForTexts = {
            hidden: {
                  x: 250,
            },
            visible: (duration) => ({
                  x: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const animationForRightSection = {
            hidden: {
                  opacity: 0,
                  y: 50,
            },
            visible: (duration) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      return (
            <section id={styles.containerOfOurAddresses}>
                  <motion.div id={styles.containerForLeftSectionMainTitleAndAllBlockes}>
                        <motion.h2
                              id={styles.mainTitleOfOurAddresses}
                              variants={animationForTexts}
                              initial="hidden"
                              whileInView="visible"
                              custom={0.5}

                        >Come and <span>visit us</span> in one of <br /> our offices worldwide</motion.h2>
                        <div id={styles.containerForAllStateInformation}>
                              <motion.div
                                    className={styles.containerForEachBlockOfInformation}
                                    variants={animationForTexts}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={0.7}
                              >
                                    <h3>San Francisco, CA</h3>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><RiMailSendLine size={"25px"} /></span>
                                          <span>sanfrancisco@dev.com</span>
                                    </div>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><TbPhoneCalling size={"25px"} /></span>
                                          <span>(415) 203-7468</span>
                                    </div>
                              </motion.div>
                              <motion.div
                                    className={styles.containerForEachBlockOfInformation}
                                    variants={animationForTexts}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={0.9}
                              >
                                    <h3>New York, NY</h3>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><RiMailSendLine size={"25px"} /></span>
                                          <span>newyork@dev.com</span>
                                    </div>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><TbPhoneCalling size={"25px"} /></span>
                                          <span>(212) 336-7281</span>
                                    </div>
                              </motion.div>
                              <motion.div
                                    className={styles.containerForEachBlockOfInformation}
                                    variants={animationForTexts}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1.1}
                              >
                                    <h3>Los Angeles, CA</h3>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><RiMailSendLine size={"25px"} /></span>
                                          <span>losangeles@dev.com</span>
                                    </div>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><TbPhoneCalling size={"25px"} /></span>
                                          <span>(310) 203-7468</span>
                                    </div>
                              </motion.div>
                              <motion.div
                                    className={styles.containerForEachBlockOfInformation}
                                    variants={animationForTexts}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1.3}
                              >
                                    <h3>Chicago, IL</h3>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><RiMailSendLine size={"25px"} /></span>
                                          <span>chicago@dev.com</span>
                                    </div>
                                    <div className={styles.containerForEachIconAndText}>
                                          <span><TbPhoneCalling size={"25px"} /></span>
                                          <span>(773) 336-7281</span>
                                    </div>
                              </motion.div>
                        </div>
                  </motion.div>

                  <motion.div
                        id={styles.containerForRightSection}
                        variants={animationForRightSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={1.5}
                  >
                        <img src={imgOfOurAddresses} alt="img" />
                  </motion.div>
            </section>
      )
}
export default OurAddresses;