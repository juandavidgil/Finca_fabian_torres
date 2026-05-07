import "./css/Caracteristicas.css";

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
        {
            img: cama,
            caracteristica: "4 habitaciones",
            descripcion: "amplias y cómodas"
        },
        {
            img: baño,
            caracteristica: "2 baños",
            descripcion: "totalmente equipados"
        },
        {
            img: cocina,
            caracteristica: "Cocina completa",
            descripcion: "para preparar tus comidas"
        },
        {
            img: sala,
            caracteristica: "Sala acogedora",
            descripcion: "ideal para descansar y compartir"
        },
        {
            img: parqueadero,
            caracteristica: "Parqueadero privado",
            descripcion: "para tu comodidad"
        },
        {
            img: rio,
            caracteristica: "Río cercano",
            descripcion: "para relajarte y disfrutar de la naturaleza"
        },
        {
            img: bbq,
            caracteristica: "Zona de BBQ",
            descripcion: "para momentos inolvidables"
        },
        {
            img: zonasVerdes,
            caracteristica: "Amplias zonas verdes",
            descripcion: "y aire puro"
        },
        {
            img: atardecer,
            caracteristica: "Hermosos atardeceres",
            descripcion: "rodeados de naturaleza"
        },
    ];

    return (
        <section className="caracteristicas">

            {/* LEFT */}
            <div className="caracteristicas-info">

                <h2>Características de la finca</h2>

                <div className="caracteristicas-grid">

                    {caracteristicas.map((c, index) => (
                        <div className="caracteristica-card" key={index}>

                            <img
                                src={c.img}
                                alt={c.caracteristica}
                            />

                            <div className="caracteristica-texto">
                                <h3>{c.caracteristica}</h3>
                                <p>{c.descripcion}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

            {/* RIGHT */}
            <div className="caracteristicas-banner">

                <div className="banner-card">

                    <h3>
                        Conéctate con lo que realmente importa
                    </h3>

                    <img
                        src={zonasVerdes}
                        alt="hoja"
                    />

                    <p>
                        Disfruta de la tranquilidad del campo,
                        el sonido del río y la belleza de los
                        paisajes únicos.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Caracteristicas;