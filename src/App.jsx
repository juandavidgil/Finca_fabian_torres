import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Galeria from './components/Galeria';
import Caracteristicas from './components/Caracteristicas';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Caracteristicas/>
      <Galeria/>
      <Ubicacion/>
      <Footer/>
    </div>
      
  )
}

export default App
