import "./css/Footer.css";

import {
    motion
} from "motion/react";

function Footer() {

    return (

        <footer className="footer">

            <motion.div
                className="footer-container"

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

                {/* TOP */}

                <div className="footer-top">

                    <div className="footer-brand">

                        <span>
                            GUAYABETAL · META
                        </span>

                        <h2>
                            Escápate de la rutina y vive una experiencia inolvidable
                        </h2>

                        <p>
                            Naturaleza, tranquilidad y momentos únicos
                            en un entorno diseñado para descansar.
                        </p>

                    </div>

                    <div className="footer-action">

                        <button>
                            Reservar ahora
                        </button>

                    </div>

                </div>

                {/* DIVIDER */}

                <div className="footer-divider" />

                {/* BOTTOM */}

                <div className="footer-bottom">

                    <p>
                        © 2026 Guayabetal Meta. Todos los derechos reservados.
                    </p>

                    <p className="footer-company">
                        Diseñado y desarrollado por
                        <span> ApexScale</span>
                    </p>

                </div>

            </motion.div>

        </footer>
    );
}

export default Footer;