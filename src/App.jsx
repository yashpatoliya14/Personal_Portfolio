import './App.css';
import Header from './components/Header';
import Section0 from './components/Section0';
import Projects from './components/Projects';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';

// ..
AOS.init();
function App() {
return (
  <>
    <div  >

    <Header />
    <Section0/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>    
    <Footer/>
      </div> 
  </>
)
}

export default App
