import 'bootstrap/dist/css/bootstrap.min.css';
import Web from '../layouts/Web';
import Front from '../components/main/front/Front';
import AboutMe from '../components/main/body/AboutMe';
import './../../utils/style/web.css';
import MySkills from '../components/main/body/MySkills';
import MyServices from '../components/main/body/MyServices';

function LaginPage() {
  return (
    <div>    
      <Web />
      <Front />
      <AboutMe />
      <MySkills />
      <MyServices />
    </div>
    
  );
}

export default LaginPage;
