import Restaurant from "../../../utils/img/proyect/Restaurant.png";
import Distribuidora from "../../../utils/img/proyect/Distribuidora.png";
import Hotel from "../../../utils/img/proyect/Hotel.png";
import Transporte from "../../../utils/img/proyect/Transporte.png";
import Guadalupe from "../../../utils/img/proyect/Guadalupe.png";
import SanGabriel from "../../../utils/img/proyect/SanGabriel.png";
import Inversion from "../../../utils/img/proyect/Inversion.png";
import { useState } from "react";

const proyect = [
  {Tipo:'Restaurante',Cargo:'Laravel / Full Stack',Img:Restaurant,Tecn:['Laravel','Google']},
  {Tipo:'Distribuidora',Cargo:'Laravel / Full Stack',Img:Distribuidora,Tecn:['Laravel','Google']},
  {Tipo:'Hotel',Cargo:'Laravel / Full Stack',Img:Hotel,Tecn:['Laravel','Google']},
  {Tipo:'Transporte',Cargo:'Laravel / Full Stack',Img:Transporte,Tecn:['Laravel','Google']},  
  {Tipo:'Guadalupe',Cargo:'Laravel',Img:Guadalupe,Tecn:['Laravel','Google']},
  {Tipo:'SanGabriel',Cargo:'Laravel',Img:SanGabriel,Tecn:['Laravel','Google']},
  {Tipo:'Inversiones Santa Genara',Cargo:'Html, Css, JS',Img:Inversion,Tecn:['Laravel','Google']}];

const RenderItem = (props) => {
  return (
    <div className='col-md-4 col-sm-6 col-12'>
      <div className="mt-5 mx-1 position-relative box-proyect" style={{height:'300px',zIndex:100}}>
        <img className="w-100 position-absolute h-100" src={props.data.Img} alt="" />
        <div className="capa-proyect"></div>
        <div className="text-center info-proyect">
          <p className="col-12">{props.data.Tipo}</p>
          <p className="col-12">{props.data.Cargo}</p>
        </div>
      </div>
    </div>
  );
}

function Proyecto() {
  const clasActivar = 'btn w-100 opt-rango ';
  const [isActivar, setActivar] = useState({Front : true,Backend : false , Full : false});

  const activar = (tipo) => {
    let actualizar = {Front : tipo === 'Front'  ,Backend : tipo === 'Backend' , Full : tipo === 'Full'};

    setActivar(actualizar);
  }
  
  return (
    <div className="d-flex flex-wrap mi-proyecto container" id='mi-proyecto'>
        <div className='col-12'>
            <h1 className='text-center title-proyecto'>Proyectos</h1>
            <p className='text-center'>Aquí hay algunos proyectos de aplicaciones y paginas web en las que he trabajado para <span className='text-primary'>ItnovateLab</span>.</p>
            <div className='d-flex flex-wrap justify-content-center'>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Front ? `${clasActivar} active` : clasActivar } onClick={() => activar('Front')}>Frontend</button> </div>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Backend ? `${clasActivar} active` : clasActivar } onClick={() => activar('Backend')}>Backend</button> </div>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Full ? `${clasActivar} active` : clasActivar } onClick={() => activar('Full')}>Full Stack</button></div>
            </div>
            <div className='d-flex flex-wrap'>
              {proyect.map((row) => {
                return <RenderItem key={row.Tipo} data={row}></RenderItem>
              })}
            </div>
        </div>
    </div>
  );
}

export default Proyecto;