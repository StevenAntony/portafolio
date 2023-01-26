import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Redes = () => {
    return (
        <div className="icon-redes">
            <ul>
                {/* <li className="fafacebook"><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li> */}
                {/* <li className="fainstagram"><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li> */}
                {/* <li className="faTwitter"><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li> */}
                {/* <li className="faYoutube"><a href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li> */}
                <li className="faLinkedinIn"><a href="https://www.linkedin.com/in/steven-antony-castillo-flores-2502031a7/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
                <li className="faGithub"><a href="https://github.com/StevenAntony/my" target='_blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                <li className="faWhatsapp"><a href="https://api.whatsapp.com/send?phone=51931603815" target='_blank'><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></li>
            </ul>
        </div>    
    )
}

export default Redes;