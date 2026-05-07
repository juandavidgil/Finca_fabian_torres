import "./css/Mapa.css";
import naturaleza from "../assets/zonasverdes.png";
import atardecer from "../assets/atardecer.png";
import rio from "../assets/rio.png";

function Ubicacion() {
  return (
    <div className="mapa-section">
      <div className="mapa-info">
        <h3>Disfruta de comodidad, privacidad y paisajes únicos</h3>

        <div className="mapa-beneficios">
          <div className="mapa-beneficio">
            <img src={naturaleza} alt="naturaleza" />
            <p>Rodeado de naturaleza y aire puro</p>
          </div>

          <div className="mapa-beneficio">
            <img src={atardecer} alt="atardecer" />
            <p>Atardeceres inolvidables</p>
          </div>

          <div className="mapa-beneficio">
            <img src={rio} alt="rio" />
            <p>Espacios ideales para descansar y desconectarse</p>
          </div>
        </div>
      </div>

      <div className="mapa">
        <iframe
          title="Mapa Guayabetal"
          src="https://www.google.com/maps?q=Guayabetal+Meta&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
export default Ubicacion;
