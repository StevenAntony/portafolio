import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

export default function ButtonIcon({icon,text, ...props}) {
  return (
    <button {...props}>
        <div className='btn-icon'>
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className='btn-text'>
            {text}
        </div>
    </button>
  );
}
