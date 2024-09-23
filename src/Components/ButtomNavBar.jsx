import './Css Components/Navbar.css'
import LOGO from '../assets/FindMusic-Logo.png';
function ButtonNavBar() {

    return (
        <div className='navbar'>
            <div className='Header'>
                <img src={LOGO} alt="Logo" />
                <ul className='box'>
                    <li><a href="Home">Inicio</a></li>
                    <li><a href="Musics">Músicas em Destaque</a></li>
                    <li><a href="#Films">Filmes em Destaque</a></li>
                    <li><a href="Filter">Filtros</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ButtonNavBar;
