import stylesOfMiddleSectionOfFooter from "./middleSectionOfFooter.module.scss";
import { Link } from "react-router-dom";

const MiddleSectionOfFooter = () => {

      return (
            <section id={stylesOfMiddleSectionOfFooter.containerOfMiddleSectionOfFooter}>
                  <div id={stylesOfMiddleSectionOfFooter.nucleusContainerOfMiddleSectionOfFooter}>
                        <div id={stylesOfMiddleSectionOfFooter.leftSectionOfMiddleSectionOfFooter}>

                              <div id={stylesOfMiddleSectionOfFooter.firstColumnOfMenuInMiddleSectionOfFooter}>
                                    <h2>Pages</h2>
                                    <div id={stylesOfMiddleSectionOfFooter.listOfFirstSectionInMenuOfMiddleSectionOfFooter}>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link to="/Home">Home</Link>
                                                <Link to="/about">About</Link>
                                                <Link to="/pages">Pages</Link>
                                                <Link to="/services">Services</Link>
                                                <Link to="/Home">Case Studies</Link>
                                          </p>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link to="/blog">Blog</Link>
                                                <Link to="/Home">Case Study Single</Link>
                                                <Link to="/Home">Blog Post</Link>
                                          </p>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link to="/Home">Careers</Link>
                                                <Link to="/Home">Careers Single</Link>
                                                <Link to="/Home">Pricing</Link>
                                                <Link to="/Home">Pricing Single</Link>
                                          </p>
                                    </div>
                              </div>

                              <div id={stylesOfMiddleSectionOfFooter.secondColumnOfMenuInMiddleSectionOfFooter}>
                                    <h2>Utility pages</h2>
                                    <p id={stylesOfMiddleSectionOfFooter.listOfSecondSectionInMenuOfMiddleSectionOfFooter}>
                                          <Link to="/Home">Start Here</Link>
                                          <Link to="/Home">Style Guide</Link>
                                          <Link to="/Home">Password Protected</Link>
                                          <Link to="/Home">404 Not Found</Link>
                                          <Link to="/Home">Licenses</Link>
                                          <Link to="/Home">Changelog</Link>
                                          <Link to="/Home"><b>Browse More Templates</b></Link>

                                    </p>
                              </div>
                        </div>

                        <div id={stylesOfMiddleSectionOfFooter.rightSectionOfMiddlePeaceOfFooter}>

                              <h2 id={stylesOfMiddleSectionOfFooter.titleInRightSectionOfMiddlePeaceOfFooter}>Subscribe to our newsletter</h2>

                              <p id={stylesOfMiddleSectionOfFooter.textOfRightSectionInMiddleSectionOfFooter}>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
                              </p>

                              <div id={stylesOfMiddleSectionOfFooter.inputsContainerOfRightSectionInMiddleSectionOfFooter}>
                                    <input id={stylesOfMiddleSectionOfFooter.inputTextOfRightSectionInMiddleSectionOfFooter} type="text" placeholder="Enter Your E-mail" />
                                    <input id={stylesOfMiddleSectionOfFooter.inputsButtonOfRightSectionInMiddleSectionOfFooter} type="button" value="Subscribe" />
                              </div>

                        </div>

                  </div>
            </section>
      )
}
export default MiddleSectionOfFooter;