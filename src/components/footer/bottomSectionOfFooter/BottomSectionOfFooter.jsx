import stylesOfBottomSectionOfFooter from "./bottomSectionOfFooter.module.scss";
import { BsShield, BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin, SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";

const BottomSectionOfFooter = () => {

      return (
            <section id={stylesOfBottomSectionOfFooter.containerOfBottomSectionOfFooter}>
                  <div id={stylesOfBottomSectionOfFooter.nucleusContainerOfBottomSectionOfFooter}>
                        <div id={stylesOfBottomSectionOfFooter.containerOfMailInBottomSectionOfFooter}>
                              <BsShield size="30" color="white" background="white" />
                              <p>Mmkhitar13@gmail.com</p>
                        </div>
                        <div id={stylesOfBottomSectionOfFooter.containerOfIconsInBottomSectionOfFooter}>
                              <div className={stylesOfBottomSectionOfFooter.containerOfEachIconContainerInBottomSectionOfFooter}><BsInstagram size="25" color="white" background="white" /></div>
                              <div className={stylesOfBottomSectionOfFooter.containerOfEachIconContainerInBottomSectionOfFooter}><SlSocialLinkedin size="25" color="white" background="white" /></div>
                              <div className={stylesOfBottomSectionOfFooter.containerOfEachIconContainerInBottomSectionOfFooter}><SlSocialFacebook size="25" color="white" background="white" /></div>
                              <div className={stylesOfBottomSectionOfFooter.containerOfEachIconContainerInBottomSectionOfFooter}><TfiTwitter size="25" color="white" background="white" /></div>
                              <div className={stylesOfBottomSectionOfFooter.containerOfEachIconContainerInBottomSectionOfFooter}><SlSocialYoutube size="25" color="white" background="white" /></div>
                        </div>
                  </div>
            </section>
      )
}
export default BottomSectionOfFooter;