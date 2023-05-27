import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Main from '../main/Main';
import Footer from '../footer/Footer';

const RootLayout = () => {

      const [toggleMiniMenuState, setToggleMiniMenuState] = useState(true);
      const [hoverPageSection, setHoverPageSection] = useState(false);
      const [clickOnTheCartLink, setClickOnTheCartLink] = useState(false);

      const pageHoverFunction = useCallback((hoverPageSection) => {
            setHoverPageSection(hoverPageSection);
      }, []);

      const functionClickOnTheCartLink = useCallback((clickOnTheCartLink) => {
            setClickOnTheCartLink(clickOnTheCartLink);
      }, []);

      const toggleMiniMenuFunction = useCallback((toggleMiniMenuState) => {
            setToggleMiniMenuState(toggleMiniMenuState);
      }, []);

      return (
            <div id='rootLayout'>
                  <Header
                        hoverPageSection={hoverPageSection}
                        pageHoverFunction={pageHoverFunction}

                        clickOnTheCartLink={clickOnTheCartLink}
                        functionClickOnTheCartLink={functionClickOnTheCartLink}

                        toggleMiniMenuState={toggleMiniMenuState}
                        toggleMiniMenuFunction={toggleMiniMenuFunction}
                  />

                  <Main
                        hoverPageSection={hoverPageSection}
                        pageHoverFunction={pageHoverFunction}

                        clickOnTheCartLink={clickOnTheCartLink}
                        functionClickOnTheCartLink={functionClickOnTheCartLink}

                        toggleMiniMenuState={toggleMiniMenuState}
                        toggleMiniMenuFunction={toggleMiniMenuFunction}
                  />

                  <Outlet />

                  <Footer />
            </div>
      );
}
export { RootLayout };