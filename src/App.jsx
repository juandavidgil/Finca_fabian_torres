import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Galeria from './components/Galeria';

import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';

function App() {

  return (

    <div className="app">

      <Navbar />

      <section id="inicio">
        <Hero />
      </section>




      <section id="galeria">
        <Galeria />
      </section>


      <section id="ubicacion">
        <Ubicacion />
      </section>

      <section id="contacto">
        <Footer />
      </section>

    </div>
  );
}

export default App;