import Restaurant from "../../../utils/img/proyect/Restaurant.png";
import Distribuidora from "../../../utils/img/proyect/Distribuidora.png";
import Hotel from "../../../utils/img/proyect/Hotel.png";
import Transporte from "../../../utils/img/proyect/Transporte.png";
import Guadalupe from "../../../utils/img/proyect/Guadalupe.png";
import SanGabriel from "../../../utils/img/proyect/SanGabriel.png";
import Inversion from "../../../utils/img/proyect/Inversion.png";
import Carousel from "react-bootstrap/Carousel";
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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const activar = (tipo) => {
    let actualizar = {Front : tipo === 'Front'  ,Backend : tipo === 'Backend' , Full : tipo === 'Full'};

    setActivar(actualizar);
  }
  
  return (
    <div className="d-flex flex-wrap mi-proyecto container pb-5 mb-5" id='mi-proyecto'>
        <div className='col-12'>
            <h1 className='text-center title-proyecto'>Proyectos</h1>
            <p className='text-center'>Aquí hay algunos de varios proyectos de aplicaciones y paginas web en las que he trabajado para <span className='text-primary'>ItnovateLab</span>.</p>
            <div className="col-lg-9 col-md-10 col-12 m-auto">
              <div className="d-flex flex-wrap justify-content-center">
                {proyect.map((row) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="itemGaleria">
                          <img
                              className="d-block w-100"
                              src={row.Img}
                              alt="First slide"
                            />
                          <div className="capa-galeria">
                            {row.Tipo}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              {/* <Carousel activeIndex={index} onSelect={handleSelect} touch='true'>
                {proyect.map((row) => {
                  return (<Carousel.Item>
                          <div className="">

                          </div>
                          <img
                            className="d-block w-100"
                            style={{'filter': 'brightness(0.3)'}}
                            src={row.Img}
                            alt="First slide"
                          />
                          <div className="capa" style={{position:'absolute',top:'0px',left:'0px',width:'100%',height:'100%',background:'#242424bd;'}}></div>
                          <Carousel.Caption>
                            <h3>{row.Tipo}</h3>
                            <p>{row.Cargo}</p>
                          </Carousel.Caption>
                        </Carousel.Item>)
                })}
              </Carousel> */}
            </div>
            {/* <div className='d-flex flex-wrap justify-content-center'>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Front ? `${clasActivar} active` : clasActivar } onClick={() => activar('Front')}>Frontend</button> </div>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Backend ? `${clasActivar} active` : clasActivar } onClick={() => activar('Backend')}>Backend</button> </div>
              <div className="col-xl-2 col-md-3 col-4 text-center"><button type="button" className={isActivar.Full ? `${clasActivar} active` : clasActivar } onClick={() => activar('Full')}>Full Stack</button></div>
            </div>
            <div className='d-flex flex-wrap'>
              {proyect.map((row) => {
                return <RenderItem key={row.Tipo} data={row}></RenderItem>
              })}
            </div> */}
        </div>
    </div>
  );
}

export default Proyecto;