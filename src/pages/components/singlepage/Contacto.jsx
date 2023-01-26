import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Contacto = () => {
    let [isNombre, setNombre] = useState('');
    let [isCorreo, setCorreo] = useState('');
    let [isMensaje, setMensaje] = useState('');

    const onChangeNombre = (e) => {
        setNombre(e.target.value);
    }

    const onChangeCorreo = (e) => {
        setCorreo(e.target.value);
    }

    const onChangeMensaje = (e) => {
        setMensaje(e.target.value);
    }

    return (
        <div id="contacto" className="p-5 d-flex justify-content-center">
            <div className="card-app bg-white col-md-7 col-12 my-5">
                <div className="card-content p-5">
                    <h1 className='text-left title-contacto mb-4'>Contacto</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-2 form-control-app mt-4" >
                            <input type="text" name="itmNombre" autoComplete="off" value={isNombre} onChange={onChangeNombre} className="form-control" />
                            <label htmlFor="itmNombre">Nombre</label>
                        </div>
                        <div className="col-md-6 col-12 mb-2 form-control-app mt-4">
                            <input type="email" name="itmCorreo" autoComplete="off" value={isCorreo} onChange={onChangeCorreo} className="form-control" />
                            <label htmlFor="itmCorreo">Correo</label>
                        </div>
                        <div className="col-12 form-control-app mt-4">
                            <textarea name="itmMensaje" id="" autoComplete="off" className="form-control" rows="3" value={isMensaje} onChange={onChangeMensaje}></textarea>
                            <label htmlFor="itmMensaje">Mensaje</label>
                        </div>
                        <div className="col-12 mt-2">
                            <button className='btn-primary btn p-2 btnEnviarFormulario'>
                                <span className='me-3'>Enviar</span> 
                                <FontAwesomeIcon className='trabajo-icon' icon={faArrowRight}   />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;