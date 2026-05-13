import "./css/Navbar.css";

function Navbar() {

    const scrollToSection = (id) => {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (

        <nav className="navbar">

            {/* LOGO */}

            <div
                className="navbar-logo"

                onClick={() => scrollToSection("inicio")}
            >

                <h1>Guayabetal</h1>

                <p>META</p>

            </div>

            {/* MENU */}

            <div className="navbar-menu">

                <ul>

                    <li
                        onClick={() => scrollToSection("inicio")}
                    >
                        Inicio
                    </li>

                    <li
                        onClick={() => scrollToSection("caracteristicas")}
                    >
                        La finca
                    </li>

                    <li
                        onClick={() => scrollToSection("galeria")}
                    >
                        Galería
                    </li>

                    <li
                        onClick={() => scrollToSection("ubicacion")}
                    >
                        Ubicación
                    </li>

                    <li
                        onClick={() => scrollToSection("contacto")}
                    >
                        Contacto
                    </li>

                </ul>

            </div>

            {/* BUTTON */}

            <div className="navbar-btn">

                <button
                    onClick={() => scrollToSection("contacto")}
                >
                    Reservar ahora
                </button>

            </div>

        </nav>
    );
}

export default Navbar;