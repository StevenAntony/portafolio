import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './style.css';
import Baner from './../../../../utils/img/banner-1.png';

function AboutMe() {
  return (
    <div className="aboutme">
        <div className='container h-100'>
            <div className='row h-100'>
                <div className='col-md-5 d-sm-block d-none'>
                    <img src={Baner} className='img-banner' alt="logo" />
                </div>
                <div className='col-md-7 col-sm-12'>
                    <div>
                        <p>Sobre Mi</p>
                        <p>
                            UI/UX Diseñador y Desarrollador de Aplicaciones Web
                        </p>
                        <div  className='grid-info'>
                            <div>Teléfono </div>
                            <div> : 931603815</div>
                            <div>Correo </div>
                            <div> : stevendeveloperperu@gmail.com</div>
                            <div>Ciudad </div>
                            <div> : Lambayeque, Perú</div>
                        </div>
                        <div className='d-flex'>
                            <Button variant="primary" as="a">Descargar CV</Button>
                            <Button as="a" variant="outline-dark">
                                <FontAwesomeIcon icon={faWhatsapp}  />
                                <span style={{marginLeft:'10px'}}>Contactar</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default AboutMe;