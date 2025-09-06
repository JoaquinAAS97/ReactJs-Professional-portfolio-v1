import './Header.css'
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <h2 className='title'>Joaquín Astorga</h2>
                    <p className='subtitle'>Ingeniero de software y <br/> Desarrollador FullStack</p>
                </div>
                <nav className="navbar">
                    <a href="#trabajos">Trabajos</a>
                    <a href="#acerca-de">Acerca de </a>
                    <a href="#contacto">Contactos</a>
                </nav>
                <DarkModeSwitch/>
            </header>
        </>
    );
};

export default Header;