import "./css/Caracteristicas.css";

import {
    motion
} from "motion/react";

import cama from "../assets/cama.png";
import baño from "../assets/bano.png";
import cocina from "../assets/cocina.png";
import sala from "../assets/sala.png";
import parqueadero from "../assets/parqueadero.png";
import rio from "../assets/rio.png";
import bbq from "../assets/bbq.png";
import zonasVerdes from "../assets/zonasverdes.png";
import atardecer from "../assets/atardecer.png";
import cascada from "../assets/cascada.jpeg";

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
        }
    ];

    /* =========================
       STAGGER
    ========================= */

    const container = {

        hidden: {},

        show: {

            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const item = {

        hidden: {
            opacity: 0,
            y: 60
        },

        show: {
            opacity: 1,
            y: 0
        }
    };

    return (

        <section className="caracteristicas">

            {/* LEFT */}

            <motion.div
                className="caracteristicas-info"

                initial={{
                    opacity: 0,
                    y: 60
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
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

                <h2>
                    Características de la finca
                </h2>

                <motion.div
                    className="caracteristicas-grid"

                    variants={container}

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                >

                    {caracteristicas.map((c, index) => (

                        <motion.div
                            className="caracteristica-card"

                            key={index}

                            variants={item}

                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            whileHover={{
                                y: -8,
                                scale: 1.02
                            }}
                        >

                            <img
                                src={c.img}
                                alt={c.caracteristica}
                            />

                            <div className="caracteristica-texto">

                                <h3>
                                    {c.caracteristica}
                                </h3>

                                <p>
                                    {c.descripcion}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </motion.div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
                className="caracteristicas-banner"

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
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >

                <motion.div
                    className="banner-card"

                    whileHover={{
                        y: -10,
                        scale: 1.02
                    }}

                    transition={{
                        duration: 0.4
                    }}
                >

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

                </motion.div>

            </motion.div>

        </section>
    );
}

export default Caracteristicas;