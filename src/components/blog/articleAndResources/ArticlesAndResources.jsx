import { useState } from "react";
import stylesOfArticlesAndResources from "./articlesAndResources.module.scss";
import imgOfArticlesAndResources1 from "../../../images/imgOfArticlesAndResources1.png";
import imgOfArticlesAndResources2 from "../../../images/imgOfArticlesAndResources2.png";
import imgOfArticlesAndResources3 from "../../../images/imgOfArticlesAndResources3.png";
import imgOfArticlesAndResources4 from "../../../images/imgOfArticlesAndResources4.png";
import imgOfArticlesAndResources5 from "../../../images/imgOfArticlesAndResources5.png";
import { HalfCircle } from "../../../ready-made-items/ReadyMadeItems";
import { motion } from "framer-motion";
import { useCustomHook } from "../../hooks/customHook";

const ArticlesAndResources = () => {

      const animationForSection = {
            hidden: {
                  x: -250,
            },
            visible: (duration) => ({
                  x: 0,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      const { mobile, tablet, desctop } = useCustomHook();

      const objectForEachBlock = [
            {
                  secondClassName: "block1",
                  id: 1,
                  img: imgOfArticlesAndResources1,
                  title: "6 great keyboards that your development team will completely fall in love with",
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
            },
            {
                  secondClassName: "block2",
                  id: 2,
                  img: imgOfArticlesAndResources2,
                  title: `Code refactoring best practices: when its time (and when its not) to do it`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
            },
            {
                  secondClassName: "block3",
                  id: 3,
                  img: imgOfArticlesAndResources3,
                  title: `6 amazing web development libraries you should know about in 2022`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
            },
            {
                  secondClassName: "block4",
                  id: 4,
                  img: imgOfArticlesAndResources4,
                  title: `Great development apps for programmers and product developers`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
            },
            {
                  secondClassName: "block5",
                  id: 5,
                  img: imgOfArticlesAndResources5,
                  title: `What is a technology stack, and how to choose the right one for your company`,
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem`,
            },
      ];

      const [chooseItem, setChooseItem] = useState(1);

      let [positionOfItems, setPositionOfItems] = useState(
            desctop ? {
                  gridTemplateAreas: `
                  'mainTitleAndDescription mainTitleAndDescription'
                  'block1 block2'
                  'block1 block3'
                  'block1 block4'
                  'block1 block5'`
            }
                  : tablet ? {
                        gridTemplateAreas: `
                        'mainTitleAndDescription mainTitleAndDescription'
                        'block1 block1'
                        'block1 block1'
                        'block2 block3'
                        'block4 block5'`
                  }
                        : mobile ? {
                              gridTemplateAreas: `
                        'mainTitleAndDescription mainTitleAndDescription'
                        'block1 block1'
                        'block1 block1'
                        'block2 .'
                        'block3 .'
                        'block4 .'
                        'block5 .'
                        `
                        } : null
      );

      const changeTheLayout = (event) => {

            const arr = ["block1", "block2", "block3", "block4", "block5"];

            const selectedClassName = event.currentTarget.className;
            let pattern = /block\d+/;
            let matchesWord = selectedClassName.match(pattern);

            let selectedItem = arr.filter((item) => item === matchesWord[0]);
            let notSelectedItems = arr.filter((item) => item !== matchesWord[0]);

            const matchNumber = /\d/i;
            setChooseItem(selectedItem[0].match(matchNumber));

            return [selectedItem, notSelectedItems];
      }

      const changePosition = (event) => {

            let selected = changeTheLayout(event)[0][0];
            let firstUnselected = changeTheLayout(event)[1][0];
            let secondUnselected = changeTheLayout(event)[1][1];
            let thirdUnselected = changeTheLayout(event)[1][2];
            let fourthUnselected = changeTheLayout(event)[1][3];

            setPositionOfItems(
                  desctop ? {
                        gridTemplateAreas: `
                  'mainTitleAndDescription mainTitleAndDescription'
                  '${selected} ${firstUnselected}'
                  '${selected} ${secondUnselected}'
                  '${selected} ${thirdUnselected}'
                  '${selected} ${fourthUnselected}'
                  `
                  } : tablet ? {
                        gridTemplateAreas: `
                        'mainTitleAndDescription mainTitleAndDescription'
                  '${selected} ${selected}'
                  '${selected} ${selected}'
                  '${firstUnselected} ${secondUnselected}'
                  '${thirdUnselected} ${fourthUnselected}'
                  `
                  } : mobile ? {
                        gridTemplateAreas: `
                        'mainTitleAndDescription mainTitleAndDescription'
                  '${selected} ${selected}'
                  '${selected} ${selected}'
                  '${firstUnselected} .'
                  '${secondUnselected} .'
                  '${thirdUnselected} .'
                  '${fourthUnselected} .'
                  `
                  } : null
            );
      }

      return (
            <section id={stylesOfArticlesAndResources.sectionOfArticlesAndResources}>

                  <div id={stylesOfArticlesAndResources.topCircleOfArticlesAndResources}><HalfCircle /></div>

                  <div
                        id={stylesOfArticlesAndResources.nucleusOfArticlesAndResources}
                        style={positionOfItems}
                  >
                        <div id={stylesOfArticlesAndResources.mainTitleAndDescription}>

                              <h2 id={stylesOfArticlesAndResources.mainTitle}>
                                    Articles <span>&</span> Resources
                              </h2>

                              <p id={stylesOfArticlesAndResources.description}>
                                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis
                                    odio sit sit ac port titor sit males dolor sit consectur dolor.
                              </p>
                        </div>

                        {objectForEachBlock.map((item, index) => {
                              return (<motion.div
                                    key={item.id}
                                    onClick={changePosition}
                                    id={item.id == chooseItem ? stylesOfArticlesAndResources.activeBlock : null}
                                    className={`${stylesOfArticlesAndResources[item.secondClassName]} ${stylesOfArticlesAndResources.containerOfEachBlock}`}
                                    variants={animationForSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={item.id == chooseItem ? index + 1 : index - 1}
                                    viewport={{ once: true }}
                              >

                                    <div className={stylesOfArticlesAndResources.containerOfEachImg}>
                                          <img src={item.img} alt="img" />
                                    </div>
                                    <h5> {item.title} </h5>
                                    <p> {item.description} </p>
                              </motion.div>)
                        })}
                  </div>
                  <div id={stylesOfArticlesAndResources.bottomCircleOfArticlesAndResources}><HalfCircle /></div>
            </section >
      )
}
export default ArticlesAndResources;




