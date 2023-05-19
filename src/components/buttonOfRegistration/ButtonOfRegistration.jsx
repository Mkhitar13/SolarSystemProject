import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import stylesOfButtonRegistration from "./buttonOfRegistration.module.scss";
import { GiSunRadiations } from "react-icons/gi";

export const ButtonOfRegistration = () => {

      let navigate = useNavigate();

      const goToRegistration = () => {
            return navigate("/registration");
      };

      return (
            <motion.section
                  className={stylesOfButtonRegistration.example_container}
                  onClick={goToRegistration}
                  id={stylesOfButtonRegistration.registrationButton}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "linear", loop: Infinity }}
                  while={{ rotate: 0, transition: { duration: 1 } }}
            >

                  <div id={stylesOfButtonRegistration.refresh}>
                        <GiSunRadiations color="blue" size="50px" />
                  </div>
            </motion.section>
      )
}
