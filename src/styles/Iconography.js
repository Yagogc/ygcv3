import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilePdf,
  faHome,
  faCode,
  faBriefcase,
  faGraduationCap,
  faCubes,
  faUserCircle,
  faFolder,
  faMapMarkerAlt,
  faAt,
  faCalendarAlt,
  faPhone
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
    faGooglePlusG,
    faUserCircle,
    faFolder,
    faMapMarkerAlt,
    faAt,
    faCalendarAlt,
    faPhone
  );
};

export default Iconography;
