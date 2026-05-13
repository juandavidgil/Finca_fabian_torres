import "./css/Galeria.css";

import {
    motion,
    AnimatePresence
} from "motion/react";

import { useState } from "react";

/* IMAGES */

import cascada from "../assets/cascada.jpeg";
import rio from "../assets/rio.png";
import atardecer from "../assets/atardecer.png";
import zonasVerdes from "../assets/zonasverdes.png";
import momentos from "../assets/momentos.jpeg"

function Galeria() {

    const [selected, setSelected] = useState(null);

    const imagenes = [

        {
            id: 1,
            titulo: "Naturaleza y descanso",
            categoria: "Paisajes",
            descripcion:
                "Disfruta de vistas increíbles rodeadas de naturaleza y tranquilidad.",
            img: zonasVerdes
        },

        {
            id: 2,
            titulo: "Espacios acogedores",
            categoria: "Interior",
            descripcion:
                "Ambientes cálidos y cómodos diseñados para el descanso.",
            img: atardecer
        },

        {
            id: 3,
            titulo: "Experiencias únicas",
            categoria: "Naturaleza",
            descripcion:
                "Conecta con la tranquilidad y los paisajes naturales.",
            img: cascada
        },

        {
            id: 4,
            titulo: "Momentos inolvidables",
            categoria: "Río y paisaje",
            descripcion:
                "Disfruta de paisajes únicos y momentos inolvidables.",
            img: momentos
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

        <>
            <section className="galeria-mapa">

                {/* =========================
                   HEADER
                ========================= */}

                <motion.div
                    className="galeria-header"

                    initial={{
                        opacity: 0,
                        y: 40
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
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <span>
                        EXPERIENCIAS
                    </span>

                    <h2>
                        Explora nuestra galería
                    </h2>

                    <p>
                        Descubre cada rincón de la finca y vive
                        momentos únicos rodeado de naturaleza.
                    </p>

                </motion.div>

                {/* =========================
                   GRID
                ========================= */}

                <motion.div
                    className="galeria-grid"

                    variants={container}

                    initial="hidden"

                    whileInView="show"

                    viewport={{
                        once: true,
                        amount: 0.1
                    }}
                >

                    {imagenes.map((itemGaleria) => (

                        <motion.div
                            key={itemGaleria.id}

                            variants={item}

                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1]
                            }}

                            layoutId={`card-${itemGaleria.id}`}

                            className={`card ${
                                itemGaleria.id === 1
                                    ? "card-large"
                                    : ""
                            }`}

                            onClick={() => setSelected(itemGaleria)}

                            whileHover={{
                                y: -8,
                                scale: 1.01
                            }}
                        >

                            <motion.img
                                layoutId={`image-${itemGaleria.id}`}
                                src={itemGaleria.img}
                                alt={itemGaleria.titulo}
                            />

                            <div className="overlay" />

                            <motion.div
                                layoutId={`content-${itemGaleria.id}`}
                                className="card-content"
                            >

                                <span>
                                    {itemGaleria.categoria}
                                </span>

                                <h2>
                                    {itemGaleria.titulo}
                                </h2>

                            </motion.div>

                        </motion.div>

                    ))}

                </motion.div>

            </section>

            {/* =========================
               MODAL
            ========================= */}

            <AnimatePresence>

                {selected && (

                    <>
                        <motion.div
                            className="modal-backdrop"

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration: 0.22
                            }}

                            onClick={() => setSelected(null)}
                        />

                        <div
                            className="modal-wrapper"

                            onClick={() => setSelected(null)}
                        >

                            <motion.div
                                layoutId={`card-${selected.id}`}

                                className="modal-card"

                                onClick={(e) => e.stopPropagation()}

                                initial={{
                                    opacity: 0,
                                    scale: 0.96,
                                    y: 20
                                }}

                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    scale: 0.96,
                                    y: 20
                                }}

                                transition={{
                                    duration: 0.32,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >

                                <div className="modal-content">

                                    <motion.img
                                        layoutId={`image-${selected.id}`}
                                        src={selected.img}
                                        alt={selected.titulo}
                                        className="modal-image"
                                    />

                                    <div className="modal-info">

                                        <span>
                                            {selected.categoria}
                                        </span>

                                        <h2>
                                            {selected.titulo}
                                        </h2>

                                        <div className="modal-body">

                                            <p>
                                                {selected.descripcion}
                                            </p>

                                            <p>
                                                Vive una experiencia rodeada
                                                de naturaleza, tranquilidad y
                                                paisajes únicos.
                                            </p>

                                            <p>
                                                Disfruta de espacios diseñados
                                                para descansar y desconectarte
                                                completamente de la rutina.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </div>
                    </>
                )}

            </AnimatePresence>
        </>
    );
}

export default Galeria;