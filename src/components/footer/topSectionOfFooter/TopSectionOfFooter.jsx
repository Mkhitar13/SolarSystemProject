import stylesOfTopSectionOfFooter from "./topSectionOfFooter.module.scss";
import { GiShinyOmega } from "react-icons/gi";

const TopSectionOfFooter = () => {

      return (
            <section id={stylesOfTopSectionOfFooter.TopSectionOfFooterContainer}>
                  <div id={stylesOfTopSectionOfFooter.nucleusContainerOfTopSectionOfFooter}>

                        <div id={stylesOfTopSectionOfFooter.descriptionAndIconContainerInTopSectionOfFooter}>
                              <div id={stylesOfTopSectionOfFooter.IconContainerInTopSectionOfFooter}>
                                    <div id={stylesOfTopSectionOfFooter.icon}>
                                          <GiShinyOmega size="55px" color="blue" />
                                    </div>
                                    <div id={stylesOfTopSectionOfFooter.textByIcon}>SUN</div>
                              </div>
                              <p id={stylesOfTopSectionOfFooter.descriptionInTopSectionOfFooter}>
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    dolorolme adipiscing elit phasellus amet dui.
                              </p>
                        </div>

                        <div id={stylesOfTopSectionOfFooter.containerOfButtonsInTopSectionOfFooterContainer}>

                              <div id={stylesOfTopSectionOfFooter.firstButtonInTopSectionOfFooterContainer}>
                                    <input type="button" value="Contact Us" />
                              </div>
                              <div id={stylesOfTopSectionOfFooter.secondButtonInTopSectionOfFooterContainer}>
                                    <input type="button" value="Browse Services" />
                              </div>
                        </div>
                  </div>
            </section>
      )
}
export default TopSectionOfFooter;