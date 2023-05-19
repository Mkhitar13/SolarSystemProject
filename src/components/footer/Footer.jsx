import stylesOfFooter from "./footer.module.scss";
import TopSectionOfFooter from "./topSectionOfFooter/TopSectionOfFooter";
import MiddleSectionOfFooter from "./middleSectionOfFooter/MiddleSectionOfFooter";
import BottomSectionOfFooter from "./bottomSectionOfFooter/BottomSectionOfFooter";

const Footer = () => {

      return (
            <section id={stylesOfFooter.footerContainer}>
                  <TopSectionOfFooter />
                  <MiddleSectionOfFooter />
                  <BottomSectionOfFooter />
            </section>
      )
}
export default Footer;