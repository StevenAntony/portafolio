import { ButtonIcon } from '../../components/button';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './../../utils/style/header.css';
import Logo from './../../logo.svg';

function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <div className='item-header'>
            <img src={Logo} className="App-logo" alt="logo" />
        </div>
        <div className='item-header'>
            <ul>
                <li>Inicio</li>
                <li>Sobre Mí</li>
                <li>Proyecto</li>
                <li>Servicios</li>
            </ul>
        </div>
        <div className='item-header'>
            <ButtonIcon icon={faWhatsapp} text='Contactar' className='button-icon btn-whatsapp' />
        </div>
      </header>
    </div>
  );
}

export default Header;