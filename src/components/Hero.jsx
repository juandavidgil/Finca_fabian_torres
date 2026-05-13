import "./css/Hero.css";

import {
    motion,
    useScroll,
    useTransform
} from "motion/react";
import Paisaje from "../assets/Paisaje.jpeg"
import { useRef } from "react";

function Hero() {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    /* =========================
       IMAGE ANIMATION
    ========================= */

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 1.35]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.8],
        [1, 0.2]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 180]
    );

    /* =========================
       TEXT ANIMATION
    ========================= */

    const textY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 120]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.7],
        [1, 0]
    );

    return (

        <section
            ref={container}
            className="hero"
        >

            {/* =========================
                BACKGROUND IMAGE
            ========================= */}

            <motion.div
                className="hero-image-container"
                style={{
                    scale,
                    y,
                    opacity
                }}
            >

                <img
                    src={Paisaje}
                    alt="foto finca"
                />

                <div className="hero-overlay" />

            </motion.div>

            {/* =========================
                CONTENT
            ========================= */}

            <motion.div
                className="hero-content"
                style={{
                    y: textY,
                    opacity: textOpacity
                }}
            >

                <div className="hero-title">

                    <h2>GUAYABETAL</h2>

                    <h2>META</h2>

                </div>

                <p className="hero-subtitle">
                    Naturaleza, descanso y momentos inolvidables te esperan
                </p>

                <p className="hero-description">
                    Descubre un lugar donde el tiempo se detiene,
                    el aire es puro y cada rincón invita al descanso.
                    Nuestra finca es el espacio perfecto para
                    desconectarse del ruido de la ciudad,
                    compartir momentos inolvidables y recargar
                    energías rodeados de naturaleza.
                </p>



                <div className="hero-features">

                    <p>🌿 Entorno natural</p>

                    <p>🛡️ Privacidad total</p>

                    <p>☕ Descanso garantizado</p>

                </div>

            </motion.div>

        </section>
    );
}

export default Hero;