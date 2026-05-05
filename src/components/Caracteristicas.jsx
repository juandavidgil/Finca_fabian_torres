import cama from "../assets/cama.png";
import baño from "../assets/bano.png";
import cocina from "../assets/cocina.png";
import sala from "../assets/sala.png";
import parqueadero from "../assets/parqueadero.png";
import rio from "../assets/rio.png";
import bbq from "../assets/bbq.png";
import zonasVerdes from "../assets/zonasverdes.png";
import atardecer from "../assets/atardecer.png";
function Caracteristicas() {
 
    const caracteristicas = [
        {img: cama, caracteristica: "4 habitaciones", descripcion: "amplias y comodas"},
        {img: baño, caracteristica: "2 baños", descripcion: "totalmente equipados"},
        {img: cocina, caracteristica: "Cocina completa", descripcion: "para preparar tus comidas"},
        {img: sala, caracteristica: "Sala acogedora", descripcion: "ideal parade descansar y compartir"},
        {img: parqueadero, caracteristica: "Parqueadero privado", descripcion: "para tu comunidad"},
        {img: rio, caracteristica: "Rio cercano", descripcion: "para relajarte y disfrutar de la naturaleza"},
        {img: bbq, caracteristica: "Zona de BBQ", descripcion: "para momentos inolvidables"},
        {img: zonasVerdes, caracteristica: "Amplias zonas verdes", descripcion: "y aire puro"},
        {img: atardecer, caracteristica: "Hermosos atardeceres", descripcion: "rodeados de naturaleza"},
    ];
 
  return (
    <div>
      <div>
      <h2>Características de la finca</h2>
        {caracteristicas.map((c, index) => (
          <div key={c}>

            <img
                src={c.img}
                alt="img caracteristica"
            />
            <h3>{c.caracteristica}</h3>
            <p>{c.descripcion}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Conectate con lo que realmente importa</p>
        <img
        src={zonasVerdes}
        alt="hoja"
        />
        <p>Disfruta de la tranquilidad del
            campo, el sonido del rio y la 
            belleza de los paisajes unicos
        </p>
      </div>
    </div>
  );
}

export default Caracteristicas;