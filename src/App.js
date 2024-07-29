import './App.css';
// import MyButton from './myButton'; 
// import ClassApp from './ClassAppComps';

import NavBar from './navBar';
import Me from './WhoAmI';
import Bio from './MyBio';
import MySkills from './mySkillsComp';
import MyProjects from './myProjects';
import Footer from './footer';

function App() {
  return (
    <>
      <NavBar />
      <Me />
      <Bio />
      <MySkills />
      <MyProjects />
      <Footer/>
    </>
  );
}

export default App;
