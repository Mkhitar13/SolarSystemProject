import stylesOfPricing from "./pricing.module.scss";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HalfCircle, HalfSquare } from "../../../ready-made-items/ReadyMadeItems";
import { motion } from "framer-motion";

const Pricing = () => {

      const PricingSection = {
            hidden: {
                  opacity: 0,
            },
            visible: (duration) => ({
                  opacity: 1,
                  transition: {
                        duration: duration,
                  },
            }),
      };

      return (
            <section id={stylesOfPricing.containerOfPricingSection}>
                  <div id={stylesOfPricing.topCircleOfPricingSection}><HalfCircle /></div>
                  <div id={stylesOfPricing.nucleusContainerOfPricingSection}>
                        <h2 id={stylesOfPricing.mainTitleOfPricingSection}>
                              Pricing for all types of <br />
                              <span>companies</span> and <span>needs</span>
                        </h2>
                        <div id={stylesOfPricing.blockesContainerOfPricingSection}>
                              <motion.div variants={PricingSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1}
                                    className={stylesOfPricing.eachBlockContainerOfPricingSection}>

                                    <div className={stylesOfPricing.topPeaceOfEachBlockContainerOfPricingSection}>
                                          <h3>Standard</h3>
                                          <h2>$5,000 USD</h2>
                                          <p>A plan created for small development tasks and simple feature additions.</p>
                                          <div className={stylesOfPricing.buttonOfEachBlockContainerOfPricingSection}>
                                                <input type="button" value="Get Started" />
                                          </div>
                                    </div>
                                    <div className={stylesOfPricing.bottomPeaceOfEachBlockContainerOfPricingSection}>
                                          <h2>What's included:</h2>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>200 Hours of Development Time</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Extra hours at $50/hr</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Frontend and Backend only</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Normal Support</span>
                                          </p>
                                    </div>
                              </motion.div>
                              <motion.div variants={PricingSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={2}
                                    className={stylesOfPricing.eachBlockContainerOfPricingSection}>

                                    <div className={stylesOfPricing.topPeaceOfEachBlockContainerOfPricingSection}>
                                          <h3>Premium</h3>
                                          <h2>$10,000 USD</h2>
                                          <p>A plan created for small development tasks and simple feature additions.</p>
                                          <div id={stylesOfPricing.middleButton} className={stylesOfPricing.buttonOfEachBlockContainerOfPricingSection}>
                                                <input type="button" value="Get Started" />
                                          </div>
                                    </div>
                                    <div className={stylesOfPricing.bottomPeaceOfEachBlockContainerOfPricingSection}>
                                          <h2>What's included:</h2>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp color="blue" size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>500 Hours of Development Time</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp color="blue" size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Extra hours at $45/hr</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp color="blue" size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Data Science & Infrastructure</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp color="blue" size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Dedicated Support</span>
                                          </p>
                                    </div>
                              </motion.div>
                              <motion.div variants={PricingSection}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={3}
                                    className={stylesOfPricing.eachBlockContainerOfPricingSection}>

                                    <div className={stylesOfPricing.topPeaceOfEachBlockContainerOfPricingSection}>
                                          <h3>Deluxe</h3>
                                          <h2>$25,000 USD</h2>
                                          <p>A plan created for small development tasks and simple feature additions.</p>
                                          <div className={stylesOfPricing.buttonOfEachBlockContainerOfPricingSection}>

                                                <input type="button" value="Get Started" />
                                          </div>
                                    </div>
                                    <div className={stylesOfPricing.bottomPeaceOfEachBlockContainerOfPricingSection}>
                                          <h2>What's included:</h2>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>1000 Hours of Development Time</span> </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Extra hours at $40/hr</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>AI & Machine Learning</span>
                                          </p>
                                          <p className={stylesOfPricing.iconAndPaymentOfPricingSection}>
                                                <span className={stylesOfPricing.iconOfPricingSection}><IoCheckmarkSharp size="25px" /></span>
                                                <span className={stylesOfPricing.paymentOfPricingSection}>Dedicated Team of Devs</span>
                                          </p>
                                    </div>
                              </motion.div>
                        </div>
                  </div>
                  <div id={stylesOfPricing.bottomCircleOfPricingSection}><HalfSquare /></div>
            </section>
      );
}

export default Pricing;