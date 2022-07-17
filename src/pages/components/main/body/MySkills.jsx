import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhp, faLaravel, faJs, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import './style.css';

const skillsData = [{'Icon' : faPhp, 'Name' : 'PHP', 'Expe':' +3 años',color:'79, 91, 147'},{'Icon' : faLaravel, 'Name' : 'Laravel : Framework de PHP', 'Expe':' +3 años',color:'249,50,44'},
                    {'Icon' : faJs, 'Name' : 'JavaScript', 'Expe':'+3 años',color:'252,220,0'},{'Icon' : faDatabase, 'Name' : 'Sql : Mysql, SqlServer', 'Expe':' 3 años',color:'255,110,146'},
                    {'Icon' : faReact, 'Name' : 'React', 'Expe':'2 Meses',color:'97,218,251'},{'Icon' : faReact, 'Name' : 'React Native', 'Expe':'2 Meses',color:'80,208,231'},
                    {'Icon' : faHtml5, 'Name' : 'HTML5', 'Expe':'3 años',color:'241,101,36'},{'Icon' : faCss3, 'Name' : 'CSS3', 'Expe':'3 años',color:'13,164,253'}];

const ItemSkills = ({data}) => (
            <div style={{background:`rgba(${data.color},0.2)`,borderRadius:'4px',padding:'25px'}}>
                <div className='text-muted' style={{fontSize:'0.8rem',paddingBottom:'20px'}}>{data.Name}</div>
                <FontAwesomeIcon color={`rgb(${data.color})`} fontSize='5rem' icon={data.Icon}  />
                <div className='fw-bold text-end'  style={{fontSize:'0.8rem',color:`rgb(${data.color})`}}>Experiencia: {data.Expe}</div>
            </div>
            )

function MySkills() {
   


  return (
    <div className="myskills">
        <div className='container h-100'>
            <p className='fs-1 text-uppercase fw-bold text-primary text-end'>Mis habilidades
                <span />
            </p>
            <div className='d-grid h-100'>
                {skillsData.map(element => {
                   return <ItemSkills key={element.Name} data={element} />
                })}
            </div>
        </div>
    </div>

  );
}

export default MySkills;