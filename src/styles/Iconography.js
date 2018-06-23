import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilePdf,
  faHome,
  faCode,
  faBriefcase,
  faGraduationCap,
  faCubes
} from "@fortawesome/pro-light-svg-icons";
import {
  faFacebook,
  faGithubAlt,
  faLinkedinIn,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";

const Iconography = () => {
  library.add(
    faFilePdf,
    faHome,
    faCode,
    faBriefcase,
    faGraduationCap,
    faCubes,
    faFacebook,
    faGithubAlt,
    faLinkedinIn,
    faGooglePlusG
  );
};

export default Iconography;
