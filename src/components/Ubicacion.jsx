import "./css/Mapa.css";

import {
    motion
} from "motion/react";

import naturaleza from "../assets/zonasverdes.png";
import atardecer from "../assets/atardecer.png";
import rio from "../assets/rio.png";

function Ubicacion() {

    const beneficios = [

        {
            img: naturaleza,
            texto: "Rodeado de naturaleza y aire puro"
        },

        {
            img: atardecer,
            texto: "Atardeceres inolvidables"
        },

        {
            img: rio,
            texto: "Espacios ideales para descansar y desconectarse"
        }
    ];

    return (

        <section className="mapa-wrapper">

            <div className="mapa-header">

                <span>
                    UBICACIÓN
                </span>

                <h2>
                    Un destino rodeado de tranquilidad
                </h2>

                <p>
                    Vive una experiencia única en medio de
                    paisajes naturales, privacidad y descanso.
                </p>

            </div>

            <div className="mapa-section">

                {/* LEFT */}

                <motion.div
                    className="mapa-info"

                    initial={{
                        opacity: 0,
                        x: -80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <h3>
                        Disfruta de comodidad,
                        privacidad y paisajes únicos
                    </h3>

                    <div className="mapa-beneficios">

                        {beneficios.map((item, index) => (

                            <motion.div
                                className="mapa-beneficio"

                                key={index}

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1]
                                }}

                                whileHover={{
                                    x: 8
                                }}
                            >

                                <img
                                    src={item.img}
                                    alt="beneficio"
                                />

                                <p>
                                    {item.texto}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    className="mapa"

                    initial={{
                        opacity: 0,
                        x: 120
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1]
                    }}

                    whileHover={{
                        scale: 1.01
                    }}
                >

                    <iframe
                        title="Mapa Guayabetal"

                        src="https://www.google.com/maps?q=Guayabetal+Meta&output=embed"

                        loading="lazy"
                    />

                </motion.div>

            </div>

        </section>
    );
}

export default Ubicacion;