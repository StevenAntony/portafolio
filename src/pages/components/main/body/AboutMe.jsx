import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faFacebook,faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';
import Baner from './../../../../utils/img/banner-1.png';

function AboutMe() {
  return (
    <div className="aboutme">
        
        <div className='container h-100'>
            <div className='row h-100'>
                <div className='col-lg-5 col-md-3 md-sm-4 col-12 d-sm-block d-none'>
                    <div className='d-flex align-items-center h-100'>
                        <img src={Baner} className='img-banner' alt="logo" />
                    </div>
                </div>
                <div className='col-lg-7 col-md-9 md-sm-8 col-12'>
                    <div className='mx-5'>
                        <p className='fs-1 text-uppercase fw-bold text-primary'>Sobre Mi</p>
                        <p className='fs-5 text-muted'>
                            UI/UX Diseñador y Desarrollador de Aplicaciones Web
                        </p>
                        <div  className='grid-info'>
                            <div className='fs-6 fw-bold'>Teléfono </div>
                            <div className='fs-6 text-muted'> : 931603815</div>
                            <div className='fs-6 fw-bold'>Correo </div>
                            <div className='text-muted item-correo'> : stevendeveloperperu@gmail.com</div>
                            <div className='fs-6 fw-bold'>Ciudad </div>
                            <div className='fs-6 text-muted'> : Lambayeque, Perú</div>
                            <div className='fs-6 fw-bold'>Redes </div>
                            <div> : 

                                <Button as="a" className='me-2 ms-1' href='https://github.com/stevenAntony' variant="primary">
                                    <FontAwesomeIcon icon={faFacebook}  />
                                </Button>
                                <Button as="a" className='me-2' variant="success">
                                    <FontAwesomeIcon icon={faWhatsapp}  />
                                </Button>
                                <Button as="a" className='me-2' variant="danger">
                                    <FontAwesomeIcon icon={faInstagram}  />
                                </Button>
                                <Button as="a" target='_black' href='https://github.com/stevenAntony' variant="dark">
                                    <FontAwesomeIcon icon={faGithub}  />
                                </Button>
                            </div>
                        </div>
                        <div className='d-flex mt-4 w-100 justify-content-center'>
                            <Button variant="primary" as="a" className='me-2'>Descargar CV</Button>
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