import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
const Contacto = () => {
    return (
        <div id="contacto" className="p-5 d-flex justify-content-center">
            <div className="card-app bg-white col-md-7 col-12 my-5">
                <div className="card-content p-5">
                    <h1 className='text-left title-contacto mb-4'>Contacto</h1>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-2" >
                            <label htmlFor="itmNombre">Nombre</label>
                            <input type="text" name="itmNombre" autoComplete="off" className="form-control" />
                        </div>
                        <div className="col-md-6 col-12 mb-2">
                            <label htmlFor="itmCorreo">Correo</label>
                            <input type="email" name="itmCorreo" autoComplete="off" className="form-control" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="itmMensaje">Mensaje</label>
                            <textarea name="itmMensaje" id="" autoComplete="off" className="form-control" cols="30" rows="5"></textarea>
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