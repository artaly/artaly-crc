import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Cerification from './components/certification/Cerification';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Cerification/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
