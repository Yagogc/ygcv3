import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilePdf,
  faHome,
  faCode,
  faBriefcase,
  faGraduationCap,
  faCubes
} from "@fortawesome/free-solid-svg-icons";

const Iconography = () => {
  library.add(faFilePdf, faHome, faCode, faBriefcase, faGraduationCap, faCubes);
};

export default Iconography;
