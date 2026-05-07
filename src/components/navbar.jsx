import "./css/Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <h1>Guayabetal</h1>
                <p>META</p>
            </div>

            <div className="navbar-menu">
                <ul>
                    <li className="active">Inicio</li>
                    <li>La Finca</li>
                    <li>Galería</li>
                    <li>Ubicación</li>
                    <li>Contacto</li>
                </ul>
            </div>

            <div className="navbar-btn">
                <button>Reservar ahora</button>
            </div>

        </nav>
    );
}

export default Navbar;