import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Logo from './../../../../logo.svg';

import './header.css';

function Header() {
  const [isBars , setBars] = useState(false)

  const handleClick = () => {
    setBars(!isBars)
  }

  return (
    <div className="header">
      <header className="App-header d-flex w-100 justify-content-between">
        <div className='item-header col-md-2'>
            <img src={Logo} className="App-logo" alt="logo" />
        </div>
        <div className='item-header col-md-10'>
            <div className='d-md-none'> <FontAwesomeIcon onClick={handleClick} className='icon-bar' icon={ isBars ? faXmark : faBars}  /> </div>
            <div className={`d-md-block d-none ${isBars ? 'bars-active' : 'bars'}`} >
              <ul >
                  <li>Inicio</li>
                  <li>Sobre Mí</li>
                  <li>Proyecto</li>
                  <li>Servicios</li>
                  <li>
                    <Button as="a" variant="outline-dark">
                      <FontAwesomeIcon icon={faWhatsapp}  />
                      <span style={{marginLeft:'10px'}}>Contactar</span>
                    </Button>
                  </li>
              </ul>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;