import ImagenPortada from './../../../../utils/img/programming.svg';
import Button from 'react-bootstrap/Button';
import './front.css';

const Animate = () => {
    return (
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    )
}

function Front() {
  return (
    <div className="front">
        <Animate />
        <div className='container h-100'>
            <div className='row h-100'>
                <div className='col-md-6 col-sm-12'>
                    <div className='text-yo'>
                        <h1>Soy <strong>Steven Antony</strong></h1>
                        <h4>Un desarrollador en aplicaciones web.</h4>
                        <div>
                            <Button variant="primary" as="a">Descargar CV</Button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 d-sm-block d-none'>
                    <img src={ImagenPortada} className='img-front' alt="logo" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Front;