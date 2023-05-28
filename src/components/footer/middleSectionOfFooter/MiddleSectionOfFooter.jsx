import stylesOfMiddleSectionOfFooter from "./middleSectionOfFooter.module.scss";
import { Link, Navigate } from "react-router-dom";

const MiddleSectionOfFooter = () => {

      const handleRouteChange = (route) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return <Navigate to={route} replace />;
      };

      return (
            <section id={stylesOfMiddleSectionOfFooter.containerOfMiddleSectionOfFooter}>
                  <div id={stylesOfMiddleSectionOfFooter.nucleusContainerOfMiddleSectionOfFooter}>
                        <div id={stylesOfMiddleSectionOfFooter.leftSectionOfMiddleSectionOfFooter}>

                              <div id={stylesOfMiddleSectionOfFooter.firstColumnOfMenuInMiddleSectionOfFooter}>
                                    <h2>Pages</h2>
                                    <div id={stylesOfMiddleSectionOfFooter.listOfFirstSectionInMenuOfMiddleSectionOfFooter}>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Home</Link>
                                                <Link onClick={() => handleRouteChange('/about')} to="/about">About</Link>
                                                <Link onClick={() => handleRouteChange('/blog')} to="/blog">Pages</Link>
                                                <Link onClick={() => handleRouteChange('/services')} to="/services">Services</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Case Studies</Link>
                                          </p>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link onClick={() => handleRouteChange('/blog')} to="/blog">Blog</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Case Study Single</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Blog Post</Link>
                                          </p>
                                          <p className={stylesOfMiddleSectionOfFooter.containerOfLinksInlistOfFirstSection}>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Careers</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Careers Single</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Pricing</Link>
                                                <Link onClick={() => handleRouteChange('/home')} to="/home">Pricing Single</Link>
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