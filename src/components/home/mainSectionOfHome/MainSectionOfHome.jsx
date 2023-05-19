import styles from "../mainSectionOfHome/mainSectionOfHome.module.scss";
import { motion } from "framer-motion";
import imgforhome from "../../../images/imgforhome.png";
import { HalfCircle } from "../../../ready-made-items/ReadyMadeItems";

const MainSectionOfHome = () => {

      const animationForLeftSection = {
            hidden: {
                  opacity: 0,
                  x: 250,
            },
            visible: (duration) => ({
                  opacity: 1,
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
            <section id={styles.homeContainer}>
                  <div id={styles.leftSectionOfHome}>
                        <div id={styles.circleAnimationOfHome}>

                              <HalfCircle />
                        </div>

                        <div
                              id={styles.informationOfLeftSection}
                        >
                              <div id={styles.containerOfHomeTitle}>
                                    <motion.h1
                                          variants={animationForLeftSection}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={1.1}
                                          styles={{ overflow: "hidden" }}
                                          exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                          viewport={{ once: true }}
                                    >
                                          We are a top-notch <br />
                                          <span>development</span> agency
                                    </motion.h1>
                              </div>
                              <div id={styles.containerOfHomeText}>
                                    <motion.p
                                          variants={animationForLeftSection}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={1.3}
                                          viewport={{ once: true }}
                                    >
                                          Lorem ipsum dolor sit amet consectetur adipiscing
                                          eli mattis sit phasellus mollis sit aliquam sit
                                          nullam neque ultrices viverra nam libero justo laoreet sit.
                                    </motion.p>
                              </div >
                              <div id={styles.containerOfHomeButtons}
                                    variants={animationForLeftSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1.5}
                                    exit={{ opacity: 0, transition: { duration: 0.2 }, display: "none" }}
                                    viewport={{ once: true }}
                              >
                                    <motion.button
                                          initial="hidden"
                                          whileInView="visible"
                                          variants={animationForLeftSection}
                                          custom={1.7}
                                          id={styles.firstButtonOfHome}>Contact Us</motion.button>
                                    <motion.button
                                          initial="hidden"
                                          whileInView="visible"
                                          variants={animationForLeftSection}
                                          custom={1.9}
                                          id={styles.secondButtonOfHome}
                                    >Our Services</motion.button>
                              </div>
                        </div >
                  </div >

                  <motion.div
                        id={styles.rightSection}
                        variants={animationForRightSection}
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{ once: true }}
                  >
                        <img src={imgforhome} alt="img" />
                  </motion.div>
            </section >
      )
}
export default MainSectionOfHome;

