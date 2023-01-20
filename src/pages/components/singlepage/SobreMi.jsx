import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCode, faChartLine } from '@fortawesome/free-solid-svg-icons';

const datos = [
  {
    Titulo : 'Diseñador UI & UX', Icon:faLayerGroup,
    Descripcion : 'Soy responsable de la experiencia del usuario y de la comprensión de las necesidades del usuario, también encargo de lo visual de los usuarios.',
    Item:[
      {Titulo: 'Cosas que disfruto diseñando:',Herramienta : ['UX, UI, web, aplicaciones']},
      {Titulo: 'Herramientas de diseño:',Herramienta : ['Figma','Adobe XD','Adobe Illustrator','Flujo web']}
    ]
  },
  {
    Titulo : 'Desarrollador Frontend & Backend', Icon:faCode,
    Descripcion : 'Me importa programar e  involucrarme en todo el proceso para desarrollar aplicaciones que permitan mejorar a procesos.',
    Item:[
      {Titulo: 'Lenguajes:',Herramienta : ['HTML5, CC3, JavaScript, PHP, JQuery, Laravel, NPM, Node.JS, React, SASS, Apache, MariaDB, SQL Server, MongoDB, Mysql']},
      {Titulo: 'Herramientas de desarrollo:',Herramienta : ['Bitbucket','Bootstrap','Github','Visual Studio Code','DigitalOcean, Heroku, Netlify', 'Xampp', 'Trello']}
    ]
  },
  {
    Titulo : 'Analista de Datos', Icon:faChartLine,
    Descripcion : 'Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.',
    Item:[
      {Titulo: 'Cosas que disfruto diseñando:',Herramienta : ['UX, UI, web, aplicaciones']},
      {Titulo: 'Herramientas de diseño:',Herramienta : ['Figma','Adobe XD','Adobe Illustrator','Flujo web']}
    ]
  }
];

const Element = (props) => {
  return (
        <div>
          <div><FontAwesomeIcon className='icon-acedemico' icon={props.data.Icon}   /></div>
          <h4 className='font-mosk-bold text-center mt-5'>{props.data.Titulo}</h4>
          <p className='text-center'>{props.data.Descripcion}</p>
          <div>
            {props.data.Item.map((element) => {
              return (
                  <div key={element.Titulo}>
                    <div className='text-primary fw-bold mt-4'>{element.Titulo}</div>
                    {element.Herramienta.map((item) => {
                      return (
                        <p>{item}</p>
                      )
                    })}
                  </div>
              )
            })}
          </div>
        </div>
      )
}

function SobreMi() {

  return (
    <div className="d-flex flex-wrap sobremi" id='sobre-mi'>
        <div className='col-12 secondary-bg-color py-5' style={{marginBottom:'300px'}}>
          <h1 className='text-white title-sobremi py-5'>Hola, mi nombre es Steven. Encantado de conocerte.</h1>
          <p className='info-sobremi col-12 col-md-9 col-lg-7 m-auto text-center text-white my-1'>
            Soy un desarrolador web Full-Stack, trabajo de manera independiente desde el año 2018, he realizado trabajos remotos para empresas
            en el rubro de la tecnología, realizando paginas, aplicaciones web para empresas de restaurante, farmacias, minimarket, hoteles, colegios, etc.
            Soy tranquilamente confiado, curioso y trabajo perpetuamente para mejorar mis habilidades.
          </p>
        </div>
        <div className='col-12 bg-white '>
          <div className='content-target col-12'>
            <div className='d-flex flex-wrap col-lg-8 m-auto bg-white box-academico text-center'>
              <div className='col-md-6 col-12 p-4'>
                <div className='py-4 px-2'>
                  <Element key={datos[0].Titulo} data={datos[0]} />
                </div>
              </div>
              <div className='col-md-5 col-12 p-4'>
                <div className='py-4 px-2'>
                  <Element key={datos[1].Titulo} data={datos[1]} />
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default SobreMi;