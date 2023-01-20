import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/singlepage/style.css';

import Portada from '../components/singlepage/Portada';
import SobreMi from '../components/singlepage/SobreMi';
import Proyecto from '../components/singlepage/Proyecto';
// import Web from '../layouts/Web';
// import Front from '../components/main/front/Front';
// import AboutMe from '../components/main/body/AboutMe';
// import './../../utils/style/web.css';
// import MySkills from '../components/main/body/MySkills';
// import MyServices from '../components/main/body/MyServices';
// import MyProyect from '../components/main/body/MyProyect';

function LaginPage() {
  return (
    <div>   
      <Portada /> 
      <SobreMi />
      <Proyecto />
      {/* <Web />
      <Front />
      <AboutMe />
      <MySkills />
      <MyServices />
      <MyProyect /> */}
    </div>
  );
}

export default LaginPage;
