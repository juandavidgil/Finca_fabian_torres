import "./css/Galeria.css";

function Galeria() {

    const imagenes = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
    ];

    return (
        <section className="galeria-mapa">

            {/* =====================
                GALERÍA
            ===================== */}

            <div className="galeria">

                <h2>Galería</h2>

                <div className="galeria-grid">

                    <img
                        className="img-principal"
                        src={imagenes[0]}
                        alt="finca principal"
                    />

                    {imagenes.slice(1).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`galeria-${index}`}
                        />
                    ))}

                </div>

            </div>



        </section>
    );
}

export default Galeria;