
import stylesOfMain from "./main.module.scss";
import Pages from "../pages/Pages";
import MainOfMiniMenu from "../menuForMiniDisplay/mainOfMiniMenu/MainOfMiniMenu";
import AlertCartSection from "../cart/alertCart/AlertCartSection";
import { ButtonOfRegistration } from '../buttonOfRegistration/ButtonOfRegistration';

const Main = ({
      hoverPageSection,
      pageHoverFunction,

      clickOnTheCartLink,
      functionClickOnTheCartLink,

      toggleMiniMenuState,
      toggleMiniMenuFunction,
}) => {

      const handleMouseLeaveOnThePageSection = () => {
            setTimeout(() => {
                  pageHoverFunction(false);
            }, 1000);
      };

      return (
            <section>
                  <div
                        style={{ display: hoverPageSection ? "block" : "none" }}
                        onMouseLeave={handleMouseLeaveOnThePageSection}
                  >
                        <Pages />
                  </div>

                  <MainOfMiniMenu
                        toggleMiniMenuState={toggleMiniMenuState}
                        toggleMiniMenuFunction={toggleMiniMenuFunction}
                  />

                  <div
                        style={{
                              zIndex: '200',
                              display: clickOnTheCartLink ? 'grid' : 'none',
                        }}
                        id={stylesOfMain.containerCartInHeader}
                  >
                        <AlertCartSection
                              clickOnTheCartLink={clickOnTheCartLink}
                              functionClickOnTheCartLink={functionClickOnTheCartLink}
                        />
                  </div>
                  <ButtonOfRegistration />
            </section>
      )
}
export default Main;
