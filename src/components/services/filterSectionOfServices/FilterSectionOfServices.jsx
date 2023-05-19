import stylesOfFilterSectionOfServices from "./filterSectionOfServices.module.scss";
import "../../../scssVariables/variables.scss";
import imgOfFilterSectionOfServices1 from "../../../images/imgOfArticlesAndResources1.png";
import imgOfFilterSectionOfServices2 from "../../../images/imgOfArticlesAndResources2.png";
import imgOfFilterSectionOfServices3 from "../../../images/imgOfArticlesAndResources3.png";
import imgOfFilterSectionOfServices4 from "../../../images/imgOfArticlesAndResources4.png";
import imgOfFilterSectionOfServices5 from "../../../images/imgOfArticlesAndResources5.png";
import { HalfSquare } from "../../../ready-made-items/ReadyMadeItems";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const FilterSectionOfServices = () => {

      // const blueButton = `@include blueButton`;

      const imagesForFilterSectionOfServices = [
            {
                  id: 1,
                  imgOfBlockFilter: imgOfFilterSectionOfServices1,
                  title: "6 great keyboards that your development team will completely fall in love with",
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'Resources',
                  date: 'MAR 13, 2023'
            },
            {
                  id: 2,
                  imgOfBlockFilter: imgOfFilterSectionOfServices2,
                  title: `Code refactoring best practices: when its time (and when its not) to do it`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'Articles',
                  date: 'APR 26, 2020'
            },
            {
                  id: 3,
                  imgOfBlockFilter: imgOfFilterSectionOfServices3,
                  title: `6 amazing web development libraries you should know about in 2022`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'News',
                  date: 'JUN 01, 2019'
            },
            {
                  id: 4,
                  imgOfBlockFilter: imgOfFilterSectionOfServices4,
                  title: `Great development apps for programmers and product developers`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'Articles',
                  date: 'AUG 23, 2022'
            },
            {
                  id: 5,
                  imgOfBlockFilter: imgOfFilterSectionOfServices5,
                  title: `What is a technology stack, and how to choose the right one for your company`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'Resources',
                  date: 'JUL 11, 2018'
            },
            {
                  id: 6,
                  imgOfBlockFilter: imgOfFilterSectionOfServices1,
                  title: `What is a technology stack, and how to choose the right one for your company`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
                  type: 'News',
                  date: 'SEP 28, 2020'
            },
      ];

      const containerVariants = {
            hidden: {
                  opacity: 0,
                  transition: {
                        delay: 1,
                        staggerChildren: 0
                  }
            },
            visible: {
                  opacity: 1,
                  transition: {
                        staggerChildren: 1
                  }
            }
      };
      const [activeButton, setActiveButton] = useState('button1');

      const [originalArr, setOriginalArr] = useState(imagesForFilterSectionOfServices);
      const [arr, setArr] = useState(originalArr);

      const filterItems = useCallback((e, buttonName) => {

            setActiveButton(buttonName);

            console.log(e, buttonName);

            if (e.target.value === "All") {
                  setArr(originalArr);
            } else {
                  setArr(() => {
                        const filteredArr = originalArr.filter((item) => item.type === e.target.value);
                        return filteredArr;
                  });
            }
      }, [originalArr]);

      useEffect(() => {
            setOriginalArr(imagesForFilterSectionOfServices);
            setArr(imagesForFilterSectionOfServices);
      }, []);

      return (
            <section id={stylesOfFilterSectionOfServices.containerOfFilterSectionOfServices}>
                  <div id={stylesOfFilterSectionOfServices.nucleusContainerOfFilterSectionOfServices}>
                        <div id={stylesOfFilterSectionOfServices.sectionOfTitleAndFilterButtons}>

                              <motion.h2
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1}
                              >
                                    Latest articles
                              </motion.h2>

                              <motion.div id={stylesOfFilterSectionOfServices.sectionOfFilterButtons}
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1}
                              >
                                    <div className={stylesOfFilterSectionOfServices.eachInputContainer}>
                                          <input
                                                type="button"
                                                value="All"
                                                onClick={(e, button1) => filterItems(e, 'button1')}
                                                className={activeButton === 'button1' ? stylesOfFilterSectionOfServices.active : ""}
                                          />
                                    </div>
                                    <div className={stylesOfFilterSectionOfServices.eachInputContainer}>
                                          <input
                                                type="button"
                                                value="Articles"
                                                onClick={(e, button2) => filterItems(e, 'button2')}
                                                className={activeButton === "button2" ? stylesOfFilterSectionOfServices.active : ""}
                                          />
                                    </div>
                                    <div className={stylesOfFilterSectionOfServices.eachInputContainer}>
                                          <input
                                                type="button"
                                                value="Resources"
                                                onClick={(e, button3) => filterItems(e, 'button3')}
                                                className={activeButton === "button3" ? stylesOfFilterSectionOfServices.active : ""}
                                          />
                                    </div>
                                    <div className={stylesOfFilterSectionOfServices.eachInputContainer}>
                                          <input
                                                type="button"
                                                value="News"
                                                onClick={(e, button4) => filterItems(e, 'button4')}
                                                className={activeButton === "button4" ? stylesOfFilterSectionOfServices.active : ""}
                                          />
                                    </div>
                              </motion.div>
                        </div>

                        <div id={stylesOfFilterSectionOfServices.containerOfBlockes}>
                              {arr.map((item) => {
                                    return (
                                          <motion.div
                                                className={stylesOfFilterSectionOfServices.containerOfEachBlock}
                                                key={item.id}
                                                variants={containerVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                custom={1}
                                          >
                                                <div className={stylesOfFilterSectionOfServices.containerOfEachImg}>
                                                      <img src={item.imgOfBlockFilter} alt="img" />
                                                </div>
                                                <div className={stylesOfFilterSectionOfServices.informationSectionOfEachBlock}>

                                                      <h3>{item.title}</h3>
                                                      <div>{item.description}</div>
                                                      <hr />
                                                      <div className={stylesOfFilterSectionOfServices.typeAndDateOfInformationSection}>
                                                            <p className={stylesOfFilterSectionOfServices.typeOfInformationSection}>{item.type}</p>
                                                            <p className={stylesOfFilterSectionOfServices.dateOfInformationSection}>{item.date}</p>
                                                      </div>
                                                </div>
                                          </motion.div>
                                    )
                              })}
                        </div>
                        <div id={stylesOfFilterSectionOfServices.HalfSquareOfFilterSectionOfServices}>
                              <HalfSquare />
                        </div>
                  </div >
            </section >
      )
}

export default FilterSectionOfServices;