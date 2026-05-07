import "./css/Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

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

                <div className="hero-buttons">
                    <button>Reservar ahora</button>
                    <button>Escríbenos</button>
                </div>

                <div className="hero-features">
                    <p>🌿 Entorno natural</p>
                    <p>🛡️ Privacidad total</p>
                    <p>☕ Descanso garantizado</p>
                </div>

            </div>

            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
                    alt="foto finca"
                />
            </div>

        </section>
    );
}

export default Hero;