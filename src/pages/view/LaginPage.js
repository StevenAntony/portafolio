import 'bootstrap/dist/css/bootstrap.min.css';
import Web from '../layouts/Web';
import Front from '../components/main/front/Front';
import AboutMe from '../components/main/body/AboutMe';
import './../../utils/style/web.css';

function LaginPage() {
  return (
    <div>    
      <Web />
      <Front />
      <AboutMe />
    </div>
    
  );
}

export default LaginPage;
