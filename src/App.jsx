import { useState, useCallback } from "react";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {

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
    <div id='app'>
      <Router>

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

        <Footer />

      </Router>
    </div>
  );
}
export default App;