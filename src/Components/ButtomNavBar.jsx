import './Css Components/Navbar.css';
import LOGO from '../assets/FindMusic-Logo.png';

function ButtonNavBar() {
    return (
        <div className='navbar'>
            <div className='Header'>
                <img src={LOGO} alt="Logo" />
                <ul className='box'>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#musics">Músicas em Destaque</a></li> 
                    <li><a href="#films">Filmes em Destaque</a></li> 
                    <li><a href="#filter">Filtros</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ButtonNavBar;
