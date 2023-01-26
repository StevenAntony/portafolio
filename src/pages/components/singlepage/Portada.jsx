import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Imagen from '../../../utils/img/logo.png';

function Portada() {
    const [isOpen, setOpen] = useState(false);


    const handleMenu = () => {
        setOpen(!isOpen);
    }

  return (
    <div className="d-flex flex-wrap portada">
        <div className='col-xl-7 column-left'>
            {/* <img src={Imagen} className='ms-3 mt-3 logo' alt="" /> */}
            <div className='d-flex align-items-center justify-content-center h-100'>
                <button className='btn p-3 menubar' onClick={handleMenu}>
                    <FontAwesomeIcon icon={faBars} style={{fontSize:'35px'}}  />
                </button>
                <nav className={isOpen ?'menubar-option active' :'menubar-option' }>
                    <ul>
                        <li><a href="#sobre-mi">Sobre Mí</a></li>
                        <li><a href="#mi-proyecto">Proyecto</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='col-xl-5 column-right d-flex align-items-center justify-content-center'>
            <div>
                <h1>Hola, soy <span>Steven Antony</span></h1>
                <h2>Soy un desarrollador web full-stack</h2>

                <button className='btn-trabajo btn p-3 mt-5'>
                    <span className='me-3'>Trayectoria</span> 
                    <FontAwesomeIcon className='trabajo-icon' icon={faArrowRight}   />
                </button>
            </div>
        </div>
    </div>
  );
}

export default Portada;