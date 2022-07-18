import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp, faLaravel, faJs, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import DisenoWeb from './diseno-web.png';
import DesarrolloWeb from './desarrollo-de-aplicaciones.png';
import BaseDatos from './base-de-datos.png';

const sevicesData = [{'Icon' : DisenoWeb, 'Name' : 'Diseño Web', 'Desc':' Enfocada a la UI/UX, teniendo diseños intuitivos y llamativos perfecto para distintos dispositivos.'},
                    {'Icon' : DesarrolloWeb, 'Name' : 'Contrucción de aplicaciones web', 'Desc':` Desarrollo de aplicaciones web, teniendo experiencia en proyecto como sistemas de ventas,
                    campus virtual, sistema de incidencias etc. `},
                    {'Icon' : BaseDatos, 'Name' : 'Diseño de Base de Datos', 'Desc':' Analisis y contruccion de un base datos siendo flexible, escalable.'}];

const ItemServices = ({data}) => (
            <div style={{boxShadow: '0 25px 70px rgb(0 0 0 / 7%)',borderRadius:'4px',padding:'25px'}} className='d-flex'>
                <div>
                    <img src={data.Icon} className='img-' style={{width:'70px'}} alt="logo" />
                </div>
                <div className='ms-3'>
                    <p className='fs-5 text-black'>{data.Name}</p>
                    <p className='text-muted' style={{fontSize:'0.8rem'}}>{data.Desc}</p>
                </div>
            </div>
            )

function MyServices() {
  return (
    <div className="myservices">
        <div className='container h-100'>
            <p className='fs-1 text-uppercase fw-bold'>Mis Servicios
                <span />
            </p>
            <div className='d-grid h-100'>
                {sevicesData.map(element => {
                   return <ItemServices key={element.Name} data={element} />
                })}
            </div>
        </div>
    </div>

  );
}

export default MyServices;