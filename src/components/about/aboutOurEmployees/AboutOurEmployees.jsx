import { useState } from "react";
import stylesOfAboutOurEmployees from "./aboutOurEmployees.module.scss";
import { FaFacebookF, FaTwitter, FaGithub, FaRedhat } from "react-icons/fa";
import image1 from "../../../images/imagesForAbout/imagesForAbout-1.jpg";
import image2 from "../../../images/imagesForAbout/imagesForAbout-2.jpg";
import image3 from "../../../images/imagesForAbout/imagesForAbout-3.jpg";
import image4 from "../../../images/imagesForAbout/imagesForAbout-4.jpg";
import { HalfCircle } from "../../../ready-made-items/ReadyMadeItems";
import { motion } from "framer-motion";

const AboutOurEmployees = () => {

      const [chooseItem,] = useState(1);

      const animationForAboutOurEmployees = {
            hidden: {
                  y: -250,
            },
            visible: (duration) => ({
                  y: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const objectForInformationOfEmployees = [
            {
                  id: 1,
                  imgOfUser: image1,
                  fullname: "John Carter",
                  profession: "CEO & Co-Founder",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dolor eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                  id: 2,
                  imgOfUser: image2,
                  fullname: "JSophie Moore",
                  profession: "CTO & Co-Founder",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dolor eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                  id: 3,
                  imgOfUser: image3,
                  fullname: "Patrick Meyer",
                  profession: "VP of Frontend Developmen",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dolor eiusmod tempor incididunt ut labore et dolore.",
            },
            {
                  id: 4,
                  imgOfUser: image4,
                  fullname: "Rebeca Smith",
                  profession: "VP of Backend Development",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dolor eiusmod tempor incididunt ut labore et dolore.",
            },
      ];

      return (
            <section id={stylesOfAboutOurEmployees.containerOfAboutOurEmployees}>
                  <motion.div
                        id={stylesOfAboutOurEmployees.containerOfTitlesInAboutOurEmployees}
                        variants={animationForAboutOurEmployees}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true }}
                  >
                        <h2>Meet the <span>amazing team</span> behind <br /> our agency</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada <br /> quam commodo id integer nam drakong.</p>
                  </motion.div>
                  <div id={stylesOfAboutOurEmployees.containerAllEmployeeBlocks}>
                        {objectForInformationOfEmployees.map((item, index) => {
                              return (
                                    <motion.div
                                          key={item.id}
                                          id={stylesOfAboutOurEmployees.containerOfEachEmployeeBlock}
                                          variants={animationForAboutOurEmployees}
                                          initial="hidden"
                                          whileInView="visible"
                                          custom={item.id + 2}
                                          viewport={{ once: true }}
                                    >

                                          <div id={stylesOfAboutOurEmployees.containerAboutImgNameAndProfession}>

                                                <div id={stylesOfAboutOurEmployees.containerOfEachEmployeeImg}>
                                                      <img src={item.imgOfUser} alt="img" />
                                                </div>

                                                <div id={stylesOfAboutOurEmployees.containerAboutFullnameAndProfession}>
                                                      <h4 id={stylesOfAboutOurEmployees.fullnameOfEmployee}>{item.fullname}<span><FaRedhat color="#d3d6df" size="25px" /></span></h4>

                                                      <p id={stylesOfAboutOurEmployees.profesionOfEmployee}>{item.profession}</p>
                                                </div>
                                          </div>

                                          <div id={stylesOfAboutOurEmployees.containerOfIconForPerson}>
                                                <FaFacebookF color="#d3d6df" size="25px" />
                                                <FaTwitter color="#d3d6df" size="25px" />
                                                <FaGithub color="#d3d6df" size="25px" />
                                          </div>
                                          <p id={stylesOfAboutOurEmployees.eachPersonalDescription}>{item.description}</p>
                                    </motion.div>
                              )
                        })}
                  </div>
                  <motion.div
                        id={stylesOfAboutOurEmployees.bottomButtonOfAboutOurEmployees}
                        variants={animationForAboutOurEmployees}
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{ once: true }}
                  >
                        <input type="button" value="Join our team" />
                  </motion.div>
                  <div id={stylesOfAboutOurEmployees.bottomCircleOfAboutOurEmployees}><HalfCircle /></div>
            </section>
      )
}
export default AboutOurEmployees;




