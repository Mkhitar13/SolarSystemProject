import stylesOfServices from "../services/services.module.scss";
import FilterSectionOfServices from "./filterSectionOfServices/FilterSectionOfServices"

function Services() {

      return (
            <section id={stylesOfServices.containerOfServices}>
                  <FilterSectionOfServices />
            </section>
      );
}

export default Services;